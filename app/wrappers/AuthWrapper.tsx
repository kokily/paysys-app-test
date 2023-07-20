'use client';

import type { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

export default function AuthWrapper({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}
