import { useCallback, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { useSetAtom } from 'jotai';
import { setMenu } from '@/libs/atom';

export default function useHeader() {
  const { data } = useSession();
  const path = usePathname();
  const pathname = path.substring(1);
  const setMenuOpen = useSetAtom(setMenu);
  const apeachRef = useRef<HTMLDivElement>(null);

  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const onLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const onOutsideClick = useCallback((e: any) => {
    if (apeachRef.current && !apeachRef.current.contains(e.target as any)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', onOutsideClick, true);

    return () => window.removeEventListener('click', onOutsideClick, true);
  }, [apeachRef]);

  return {
    pathname,
    apeachRef,
    onToggleMenu,
    onOutsideClick,
    onLogout,
    user: data?.user,
  };
}
