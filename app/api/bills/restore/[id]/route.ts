import db from '@/libs/database';
import { getSessionUser } from '@/libs/session';
import { getId } from '@/libs/utils';

export async function PATCH(req: Request) {
  try {
    const id = getId(req);

    const user = await getSessionUser();
    const bill = await db.bill.findUnique({
      where: { id },
    });

    if (!bill) {
      return new Response(
        JSON.stringify({ error: '해당 빌지는 존재하지 않습니다.' })
      );
    }

    if (user.username === bill.username) {
      const cart = await db.cart.update({
        where: { id: bill.cartId! },
        data: {
          completed: false,
          updatedAt: new Date(),
        },
      });

      await db.bill.delete({
        where: { id },
      });

      return new Response(JSON.stringify(cart));
    } else {
      return new Response(JSON.stringify({ error: '수정 권한이 없습니다.' }));
    }
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
