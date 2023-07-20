import bcrypt from 'bcryptjs';
import db from '@/libs/database';
import { getSessionUser } from '@/libs/session';
import { serializeUser } from '@/libs/utils';

export async function POST(req: Request) {
  try {
    const { password }: { password: string } = await req.json();

    const sessionUser = await getSessionUser();
    const user = await db.user.update({
      where: { id: sessionUser.id },
      data: {
        password: await bcrypt.hash(password, 10),
        updatedAt: new Date(),
      },
    });

    return new Response(JSON.stringify(serializeUser(user)));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
