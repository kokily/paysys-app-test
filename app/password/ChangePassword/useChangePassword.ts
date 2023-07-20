import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios';

async function changePasswordAPI(password: string) {
  const response = await axios.post('/api/auth/password', { password });
  return response.data;
}

export default function useChangePassword() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const passwordRef = useRef<HTMLInputElement | null>(null);

  // Mutations
  const changePasswordMutate = useMutation(changePasswordAPI);

  const onBack = () => {
    router.back();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangePassword = async (e: SyntheticEvent) => {
    e.preventDefault();

    await changePasswordMutate.mutateAsync(password, {
      onSuccess: (data: SerializeUser) => {
        toast.success(`${data.username} 님 비밀번호 변경!`);
        setPassword('');
        router.back();
      },
      onError: (err: any) => {
        toast.error(err.message);
      },
    });
  };

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef?.current?.focus();
    }
  }, []);

  return {
    password,
    passwordRef,
    onBack,
    onChange,
    onChangePassword,
  };
}
