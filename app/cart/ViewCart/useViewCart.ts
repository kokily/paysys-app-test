import type { Bill, Cart } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { initialState, reducer, setInitialState } from './reducer';

async function viewCartAPI() {
  const response = await axios.get<Cart>('/api/cart');
  return response.data;
}

async function addBillAPI(payload: AddBillPayload) {
  const response = await axios.post<Bill>('/api/bills/add', payload);
  return response.data;
}

export async function removeOneCartAPI(itemId: string) {
  const response = await axios.patch(`/api/cart/update/${itemId}`);
  return response.data;
}

export async function removeCartAPI() {
  const response = await axios.delete('/api/cart/remove');
  return response.data;
}

export default function useViewCart() {
  const { data } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, hall, etc, totalAmount } = state;

  // Data Fetching
  const { data: cart, refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: () => viewCartAPI(),
    enabled: true,
    cacheTime: 0,
    retry: 0,
  });

  // Mutations
  const addBillMutate = useMutation(addBillAPI);
  const removeOneCartMutate = useMutation(removeOneCartAPI);
  const removeCartMutate = useMutation(removeCartAPI);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onAddBill = async (e: SyntheticEvent) => {
    e.preventDefault();

    await addBillMutate.mutateAsync(
      {
        title,
        hall,
        etc,
        userId: data?.user?.id!,
        username: data?.user?.username!,
      },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries(['cart']);
          setInitialState(dispatch);
          router.replace(`/fronts/${data.id}`);
        },
        onError: (err: any) => {
          toast.error(err.message);
        },
      }
    );
  };

  const onRemoveOneCart = async (itemId: string, itemName: string) => {
    if (window.confirm(`${itemName} 품목을 삭제합니다`)) {
      console.log(itemId);
      await removeOneCartMutate.mutateAsync(itemId, {
        onSuccess: () => {
          queryClient.invalidateQueries(['cart', itemId]);
          refetch();
        },
        onError: (err: any) => {
          toast.error(err.message);
        },
      });
    } else {
      toast.info('삭제를 취소하셨습니다.');
      return;
    }
  };

  const onRemoveCart = async () => {
    await removeCartMutate.mutateAsync(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries(['cart']);
        setInitialState(dispatch);
        refetch();
      },
      onError: (err: any) => {
        toast.error(err.message);
      },
    });
  };

  const CalAmount = (items: any[]) => {
    let total = 0;

    for (let key in items) {
      total += items[key].amount;
    }

    dispatch({ name: 'totalAmount', value: total });
  };

  useEffect(() => {
    if (cart?.items) {
      CalAmount(cart.items);
    }
  }, [cart]);

  return {
    cart,
    title,
    hall,
    etc,
    totalAmount,
    onChange,
    onAddBill,
    onRemoveOneCart,
    onRemoveCart,
  };
}
