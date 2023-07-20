import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useReducer, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { initialState, reducer } from './reducer';

export default function useLogin() {
  const router = useRouter();
  const { status } = useSession();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, password } = state;
  const usernameRef = useRef<HTMLInputElement | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await signIn('credentials', {
      redirect: false,
      username,
      password,
      callbackUrl: '/soldier',
    });

    if (response?.error) {
      toast.error(response.error);
      return;
    }
  };

  if (status === 'authenticated') {
    router.replace('/soldier');
  }

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef?.current?.focus();
    }
  }, []);

  return {
    username,
    password,
    usernameRef,
    onChange,
    onLogin,
  };
}
