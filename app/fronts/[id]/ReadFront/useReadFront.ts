import type { Bill } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { getFrontId } from '@/libs/utils';

export async function readBillAPI(id: string) {
  const response = await axios.get<Bill>(`/api/bills/${id}`);
  return response.data;
}

export async function removeBillAPI(id: string) {
  const response = await axios.delete(`/api/bills/remove/${id}`);
  return response.data;
}

export async function restoreBillAPI(id: string) {
  const response = await axios.patch(`/api/bills/restore/${id}`);
  return response.data;
}

export async function removeReserveAPI(id: string) {
  const response = await axios.delete(`/api/reserve/${id}`);
  return response.data;
}

export default function useReadFront() {
  const { data } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const id = getFrontId(pathname);

  // Data Fetching
  const { data: front, refetch } = useQuery({
    queryKey: ['front'],
    queryFn: () => readBillAPI(id),
    enabled: !!id,
  });

  // Mutations
  const restoreBillMutate = useMutation(restoreBillAPI);
  const removeBillMutate = useMutation(removeBillAPI);
  const removeReserveMutate = useMutation(removeReserveAPI);

  const onBack = () => {
    router.back();
  };

  const onRestoreBill = async () => {
    if (window.confirm('※ 주의!! 빌지 삭제 후 전표확인으로 돌아갑니다.')) {
      await restoreBillMutate.mutateAsync(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(['front', id]);
          router.replace('/fronts');
        },
        onError: (err: any) => {
          alert(err.message);
        },
      });
    } else {
      return;
    }
  };

  const onAddReservePage = () => {
    router.push(`/fronts/update/${id}`);
  };

  const onRemoveReserve = async () => {
    await removeReserveMutate.mutateAsync(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['front', id]);
        refetch();
      },
    });
  };

  const onRemoveFront = async () => {
    await removeBillMutate.mutateAsync(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['front', id]);
        router.back();
      },
    });
  };

  return {
    front,
    onBack,
    onRestoreBill,
    onAddReservePage,
    onRemoveReserve,
    onRemoveFront,
    isAdmin: data?.user?.admin,
    userId: data?.user?.id,
  };
}
