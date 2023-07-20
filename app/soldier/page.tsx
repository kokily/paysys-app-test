'use client';

import { signOut } from 'next-auth/react';

export default function SoldierPage() {
  return (
    <div>
      <h2>SoldierPage</h2>

      <div>
        <button onClick={async () => await signOut({ callbackUrl: '/' })}>
          로그아웃
        </button>
      </div>
    </div>
  );
}
