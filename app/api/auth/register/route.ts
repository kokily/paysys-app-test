import bcrypt from 'bcryptjs';
import db from '@/libs/database';
import { serializeUser } from '@/libs/utils';

export async function POST(req: Request) {
  try {
    const { username, password, secret }: RegisterState = await req.json();

    const exists = await db.user.findUnique({
      where: { username },
    });

    if (exists) {
      return new Response(
        JSON.stringify({ error: '이미 등록된 아이디입니다.' })
      );
    }

    if (secret !== process.env.PASSWORD) {
      return new Response(JSON.stringify({ error: '비밀키가 틀렸습니다.' }));
    }

    const user = await db.user.create({
      data: {
        username,
        password: await bcrypt.hash(password, 10),
      },
    });

    return new Response(JSON.stringify(serializeUser(user)));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
