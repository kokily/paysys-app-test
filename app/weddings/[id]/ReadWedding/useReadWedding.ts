import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { readWeddingAPI, removeSignAPI, removeWeddingAPI } from './api';
import { getFrontId } from '@/libs/utils';

export default function useReadWedding() {
  const router = useRouter();
  const id = getFrontId(usePathname());
  const queryClient = useQueryClient();
  const { data } = useSession();

  // Data Fetching
  const { data: wedding, refetch } = useQuery({
    queryKey: ['wedding'],
    queryFn: () => readWeddingAPI(id),
    enabled: !!id,
  });

  // Mutations
  const removeSignMutate = useMutation(removeSignAPI);
  const removeWeddingMutate = useMutation(removeWeddingAPI);

  const onBack = () => {
    router.back();
  };

  const onUpdateExpensePage = () => {
    router.push(`/expense/update/${id}`);
  };

  const onRemoveSign = async () => {
    await removeSignMutate.mutateAsync(id, {
      onSuccess: () => {
        toast.success('서명 삭제!');
        refetch();
      },
      onError: (err: any) => {
        toast.error(err.message);
      },
    });
  };

  const onRemoveWedding = async () => {
    await removeWeddingMutate.mutateAsync(id, {
      onSuccess: () => {
        toast.success('웨딩 전표 삭제');
        queryClient.invalidateQueries(['weddings', 'wedding', id]);
        router.replace('/weddings');
      },
      onError: (err: any) => {
        toast.error(err.message);
      },
    });
  };

  return {
    wedding,
    onBack,
    onUpdateExpensePage,
    onRemoveSign,
    onRemoveWedding,
    isAdmin: data?.user?.admin,
  };
}
