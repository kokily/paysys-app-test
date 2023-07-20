import type { Bill } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useMemo, useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import qs from 'qs';
import useLocalStorage from 'use-local-storage';
import { initialState, reducer } from './reducer';
import { useObserver } from '@/libs/hooks';

async function listFrontsAPI(queries: ListFrontsQueries) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<Array<Bill>>(`/api/bills?${queryString}`);
  return response.data;
}

export default function useListFronts() {
  const router = useRouter();
  const [scrollY, setScrollY] = useLocalStorage('listFrontsScroll', 0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { search, hall, userId } = state;

  const { data, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['fronts'],
    queryFn: ({ pageParam }) =>
      listFrontsAPI({ cursor: pageParam, title: search, hall, userId }),
    enabled: true,
    getNextPageParam: (data) =>
      data && data.length === 40 ? data[data.length - 1].id : undefined,
  });

  const fronts = useMemo(() => {
    if (!data) return [];

    return ([] as Array<Bill>).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    await refetch();
  };

  const onHallList = async (hall: string) => {
    await dispatch({ name: 'hall', value: hall });
    await refetch();
  };

  const onUserList = async (userId: string) => {
    await dispatch({ name: 'userId', value: userId });
    await refetch();
  };

  const onReadFront = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/fronts/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    fronts,
    search,
    onChange,
    onSearch,
    onHallList,
    onUserList,
    onReadFront,
    setTarget,
  };
}
