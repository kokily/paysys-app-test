import { usePathname, useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getFrontId } from '@/libs/utils';

export async function readUserAPI(id: string) {
  const response = await axios.get<SerializeUser>(`/api/users/${id}`);
  return response.data;
}

async function removeUserAPI(id: string) {
  const response = await axios.delete(`/api/users/remove/${id}`);
  return response.data;
}

async function setAdminAPI(id: string) {
  const response = await axios.patch<SerializeUser>(`/api/users/admin/${id}`);
  return response.data;
}

async function setEmployeeAPI(id: string) {
  const response = await axios.patch<SerializeUser>(
    `/api/users/employee/${id}`
  );
  return response.data;
}

export default function useReadUser() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const id = getFrontId(usePathname());

  // Data Fetching
  const { data: user, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: () => readUserAPI(id),
    enabled: !!id,
  });

  // Mutations
  const removeUserMutate = useMutation(removeUserAPI);
  const setAdminMutate = useMutation(setAdminAPI);
  const setEmployeeMutate = useMutation(setEmployeeAPI);

  const onBack = () => {
    router.back();
  };

  const onRemoveUser = async () => {
    await removeUserMutate.mutateAsync(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', 'user', id]);
        router.back();
      },
      onError: (err: any) => {
        toast.error(err.message);
      },
    });
  };

  const onSetIdentity = async (select: IdentifyType) => {
    if (select === 'admin') {
      await setAdminMutate.mutateAsync(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(['users', 'user', id]);
          refetch();
        },
        onError: (err: any) => {
          toast.error(err.message);
        },
      });
    } else {
      await setEmployeeMutate.mutateAsync(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(['users', 'user', id]);
          refetch();
        },
        onError: (err: any) => {
          toast.error(err.message);
        },
      });
    }
  };

  return {
    user,
    onBack,
    onRemoveUser,
    onSetIdentity,
  };
}
