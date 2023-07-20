import type { Cart, Item } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useReducer } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { initialState, reducer, setInitialState } from './reducer';
import { getFrontId } from '@/libs/utils';

// APIs
export async function readMenuAPI(id: string) {
  const response = await axios.get<Item>(`/api/menu/${id}`);
  return response.data;
}

export async function addCartAPI(payload: AddCartPayload) {
  const response = await axios.post<Cart>('/api/cart/add', payload);
  return response.data;
}

export default function useReadMenu() {
  const { data } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const id = getFrontId(pathname);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, price } = state;

  // Data Fetching
  const { data: menu } = useQuery({
    queryKey: ['readMenu'],
    queryFn: () => readMenuAPI(id),
    enabled: !!id,
    staleTime: 0,
  });

  // Mutations
  const addCartMutate = useMutation(addCartAPI);

  const onBack = () => {
    router.back();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onAddCart = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (parseInt(count.toString()) < 1 || parseInt(price.toString()) < 1) {
      toast.error('단가 또는 수량을 입력하세요.');
      return;
    }

    await addCartMutate.mutateAsync(
      {
        itemId: id,
        userId: data?.user?.id!,
        count: parseInt(count.toString()),
        price: parseInt(price.toString()),
      },
      {
        onSuccess: () => {
          setInitialState(dispatch);
          router.back();
        },
        onError: (err: any) => {
          toast.error(err.message);
        },
      }
    );
  };

  useEffect(() => {
    if (menu && menu.price !== 0) {
      dispatch({ name: 'price', value: menu.price });
    } else {
      dispatch({ name: 'price', value: 0 });
    }
  }, [menu]);

  return {
    menu,
    count,
    price,
    onBack,
    onChange,
    onAddCart,
  };
}
