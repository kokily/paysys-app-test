import type { Item } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import useLocalStorage from 'use-local-storage';
import qs from 'qs';
import axios from 'axios';
import { useObserver } from '@/libs/hooks';

async function listItemsAPI(queries: ListItemsQueries) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<Array<Item>>(`/api/items?${queryString}`);
  return response.data;
}

export default function useListItems() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('listItemsScroll', 0);
  const [search, setSearch] = useState('');

  // Fetching Data
  const { data, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['items'],
    queryFn: ({ pageParam }) =>
      listItemsAPI({ cursor: pageParam, name: search }),
    enabled: true,
    getNextPageParam: (data) =>
      data && data.length === 30 ? data[data.length - 1].id : undefined,
  });

  const items = useMemo(() => {
    if (!data) return [];

    return ([] as Array<Item>).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    queryClient.invalidateQueries(['items']);
    await refetch();
  };

  const onReadItem = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/items/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    items,
    search,
    onChange,
    onSearch,
    onReadItem,
    setTarget,
  };
}
