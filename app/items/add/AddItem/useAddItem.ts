import type { Item } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useReducer } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { initialState, reducer, setInitialState } from './reducer';
import { getFrontId } from '@/libs/utils';
import { readItemAPI } from '../../[id]/ReadItem/useReadItem';

async function addItemAPI(payload: AddItemPayload) {
  const response = await axios.post<Item>('/api/items/add', payload);
  return response.data;
}

async function updateItemAPI({
  id,
  payload,
}: {
  id: string;
  payload: AddItemPayload;
}) {
  const response = await axios.patch<Item>(`/api/items/update/${id}`, payload);
  return response.data;
}

export default function useAddItem() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const id = getFrontId(usePathname());
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, divide, native, unit, price } = state;

  const { data } = useQuery({
    queryKey: ['updateItem'],
    queryFn: () => readItemAPI(id),
    enabled: !!id && id.length > 3,
  });

  // Mutations
  const addItemMutate = useMutation(addItemAPI);
  const updateItemMutate = useMutation(updateItemAPI);

  const onBack = () => {
    router.back();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch(e.target);
  };

  const onAddItem = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!(id.length > 3)) {
      // Add Item
      await addItemMutate.mutateAsync(
        {
          name,
          divide,
          native,
          unit,
          price: parseInt(price.toString()),
        },
        {
          onSuccess: (data) => {
            setInitialState(dispatch);
            queryClient.invalidateQueries(['items', 'item', id]);
            router.replace(`/items/${data.id}`);
          },
          onError: (err: any) => {
            toast.error(err.message);
          },
        }
      );
    } else {
      // Update Item
      console.log(id);
      await updateItemMutate.mutateAsync(
        {
          id,
          payload: {
            name,
            divide,
            native,
            unit,
            price: parseInt(price.toString()),
          },
        },
        {
          onSuccess: (data) => {
            setInitialState(dispatch);
            queryClient.invalidateQueries(['items', 'item', id]);
            router.replace(`/items/${data.id}`);
          },
          onError: (err: any) => {
            toast.error(err.message);
          },
        }
      );
    }
  };

  useEffect(() => {
    if (data) {
      dispatch({ name: 'name', value: data.name });
      dispatch({ name: 'divide', value: data.divide });
      dispatch({ name: 'native', value: data.native });
      dispatch({ name: 'unit', value: data.unit });
      dispatch({ name: 'price', value: data.price });
    }
  }, [data]);

  return {
    name,
    divide,
    native,
    unit,
    price,
    onBack,
    onChange,
    onAddItem,
    isEdit: id ? true : false,
  };
}
