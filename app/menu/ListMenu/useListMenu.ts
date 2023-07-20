import type { Item } from '@prisma/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import qs from 'qs';

async function listMenuAPI(queries: ListMenuQueries) {
  const queryString = qs.stringify(queries);
  const response = await axios.get<Array<Item>>(`/api/menu?${queryString}`);
  return response.data;
}

export default function useListMenu() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const divide = searchParams.get('divide');
  const native = searchParams.get('native');

  const { data } = useQuery({
    queryKey: ['listMenu'],
    queryFn: () => listMenuAPI({ divide, native }),
    enabled: !!divide && !!native,
    staleTime: 0,
    cacheTime: 0,
  });

  const onBack = () => {
    queryClient.invalidateQueries(['listMenu']);
    router.back();
  };

  const onReadMenu = (id: string) => {
    queryClient.invalidateQueries(['listMenu']);
    router.push(`/menu/${id}`);
  };

  return {
    menu: data,
    onBack,
    onReadMenu,
  };
}
