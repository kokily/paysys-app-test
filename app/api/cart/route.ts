import db from '@/libs/database';
import { getSessionUser } from '@/libs/session';

export async function GET(req: Request) {
  try {
    const user = await getSessionUser();

    if (!user) {
      return new Response(
        JSON.stringify({ error: '접속중인 사용자가 없습니다.' })
      );
    }

    const cart = await db.cart.findFirst({
      where: {
        userId: user.id,
        completed: false,
        deleted: false,
      },
    });

    return new Response(JSON.stringify(cart));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
