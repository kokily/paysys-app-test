import type { Item } from '@prisma/client';
import { usePathname, useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getFrontId } from '@/libs/utils';

export async function readItemAPI(id: string) {
  const response = await axios.get<Item>(`/api/items/${id}`);
  return response.data;
}

async function removeItemAPI(id: string) {
  const response = await axios.delete(`/api/items/remove/${id}`);
  return response.data;
}

export default function useReadItem() {
  const router = useRouter();
  const id = getFrontId(usePathname());
  const queryClient = useQueryClient();

  // Data Fetching
  const { data: item } = useQuery({
    queryKey: ['item'],
    queryFn: () => readItemAPI(id),
    enabled: !!id,
  });

  // Mutations
  const removeItemMutate = useMutation(removeItemAPI);

  const onBack = () => {
    router.back();
  };

  const onUpdateItemPage = () => {
    router.push(`/items/update/${id}`);
  };

  const onRemoveItem = async () => {
    await removeItemMutate.mutateAsync(id, {
      onSuccess: () => {
        toast.success('품목 삭제 완료!');
        queryClient.invalidateQueries(['items', 'item', id]);
        router.back();
      },
      onError: (err: any) => {
        toast.error(err.message);
      },
    });
  };

  return {
    item,
    onBack,
    onUpdateItemPage,
    onRemoveItem,
  };
}
