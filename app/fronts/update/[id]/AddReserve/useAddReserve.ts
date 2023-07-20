import type { Bill } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getFrontId } from '@/libs/utils';

async function addReserveAPI(payload: AddReservePayload) {
  const response = await axios.post<Bill>('/api/reserve', payload);
  return response.data;
}

export default function useAddReserve() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const id = getFrontId(usePathname());
  const [reserve, setReserve] = useState('');
  const reserveRef = useRef<HTMLInputElement | null>(null);

  // Mutations
  const addReserveMutate = useMutation(addReserveAPI);

  const onBack = () => {
    router.back();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReserve(e.target.value);
  };

  const onAddReserve = async (e: SyntheticEvent) => {
    e.preventDefault();

    await addReserveMutate.mutateAsync(
      { billId: id, reserve: parseInt(reserve) },
      {
        onSuccess: (data) => {
          toast.success('예약금이 추가되었습니다');
          queryClient.invalidateQueries(['fronts', 'front', id]);
          router.replace(`/fronts/${data.id}`);
        },
        onError: (err: any) => {
          toast.error(err.message);
        },
      }
    );
  };

  useEffect(() => {
    if (reserveRef.current) {
      reserveRef?.current?.focus();
    }
  }, []);

  return {
    reserve,
    reserveRef,
    onBack,
    onChange,
    onAddReserve,
  };
}
