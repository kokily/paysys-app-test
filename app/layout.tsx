import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import QueryWrapper from './wrappers/QueryWrapper';
import AuthWrapper from './wrappers/AuthWrapper';
import ToastWrapper from './wrappers/ToastWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '행사전표시스템 - v6.0',
  description: '행사전표시스템 - v6.0',
  icons: {
    icon: '/favicon.png',
    apple: '/logo192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>

      <QueryWrapper>
        <AuthWrapper>
          <body className={inter.className}>{children}</body>
          <ToastWrapper />
        </AuthWrapper>
      </QueryWrapper>
    </html>
  );
}
