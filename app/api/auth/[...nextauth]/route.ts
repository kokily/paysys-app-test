import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import db from '@/libs/database';

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: {
          type: 'username',
          label: 'username',
        },
        password: {
          type: 'password',
          label: 'password',
        },
      },
      async authorize(credentials, _) {
        if (!credentials) throw new Error('아이디 또는 비밀번호를 입력하세요!');

        const { username, password } = credentials;

        // User Exists
        const user = await db.user.findUnique({
          where: { username },
        });

        if (!user) throw new Error('회원 등록 후 이용해 주세요.');

        // Valid Password
        const valid = await bcrypt.compare(password, user.password);

        if (!valid) throw new Error('비밀번호가 일치하지 않습니다.');

        return {
          id: user.id,
          username: user.username,
          admin: user.admin,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.admin = user.admin;
      }

      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.admin = token.admin;
      }

      return session;
    },
  },
  secret: process.env.SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
