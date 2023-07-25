import { usePathname } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useAtom } from 'jotai';
import { toast } from 'react-toastify';
import { addSignAPI } from './api';
import { setHusband, setImage } from '@/libs/atom';
import { dataURItoBlob, getFrontId } from '@/libs/utils';

export default function useHusbandSign() {
  const id = getFrontId(usePathname());
  const queryClient = useQueryClient();
  const [currentImage, setCurrentImage] = useAtom(setImage);
  const [husbandView, setHusbandView] = useAtom(setHusband);

  // Mutations
  const addSignMutate = useMutation(addSignAPI);

  const onUploadHusbandSign = async () => {
    if (id && currentImage) {
      const file = new File([dataURItoBlob(currentImage)], 'upload');
      const data = new FormData();

      data.set('file', file);

      const response = await axios.post('/api/upload', data);

      await addSignMutate.mutateAsync(
        {
          weddingId: id,
          sex: 'husband',
          image: response.data,
        },
        {
          onSuccess: () => {
            setCurrentImage('');
            setHusbandView(false);
            queryClient.clear();
          },
          onError: (err: any) => {
            toast.error(err.message);
          },
        }
      );
    }
  };

  return {
    husbandView,
    onConfirmHusband: onUploadHusbandSign,
    onCancelHusband: () => setHusbandView(false),
  };
}
