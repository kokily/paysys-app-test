import type { Wedding } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import qs from 'qs';
import useLocalStorage from 'use-local-storage';
import { useObserver } from '@/libs/hooks';

async function listWeddingsAPI(queries: ListWeddingsQueries) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<Array<Wedding>>(
    `/api/weddings?${queryString}`
  );
  return response.data;
}

export default function useListWeddings() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('listWeddingsScroll', 0);
  const [search, setSearch] = useState('');

  // Data Fetching
  const { data, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['weddings'],
    queryFn: ({ pageParam }) =>
      listWeddingsAPI({ cursor: pageParam, date: search }),
    enabled: true,
    getNextPageParam: (data) =>
      data && data.length === 40 ? data[data.length - 1].id : undefined,
  });

  const weddings = useMemo(() => {
    if (!data) return [];

    return ([] as Array<Wedding>).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    queryClient.invalidateQueries(['weddings']);
    await refetch();
  };

  const onReadWedding = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/weddings/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    weddings,
    search,
    onChange,
    onSearch,
    onReadWedding,
    setTarget,
  };
}
