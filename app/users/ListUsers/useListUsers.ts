import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import useLocalStorage from 'use-local-storage';
import qs from 'qs';
import axios from 'axios';
import { useObserver } from '@/libs/hooks';

async function listUsersAPI(queries: ListUsersQueries) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<Array<SerializeUser>>(
    `/api/users?${queryString}`
  );
  return response.data;
}

export default function useListUsers() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('listUsersScroll', 0);
  const [search, setSearch] = useState('');

  // Data Fetching
  const { data, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam }) =>
      listUsersAPI({ cursor: pageParam, username: search }),
    enabled: true,
    getNextPageParam: (data) =>
      data && data.length === 30 ? data[data.length - 1].id : undefined,
  });

  const users = useMemo(() => {
    if (!data) return [];

    return ([] as Array<SerializeUser>).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    queryClient.invalidateQueries(['users']);
    await refetch();
  };

  const onReadUser = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/users/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    users,
    search,
    onChange,
    onSearch,
    onReadUser,
    setTarget,
  };
}
