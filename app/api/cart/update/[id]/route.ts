import db from '@/libs/database';
import { getSessionUser } from '@/libs/getSessionUser';
import { getId } from '@/libs/utils';

export async function PATCH(req: Request) {
  try {
    const itemId = getId(req);

    const user = await getSessionUser();
    const cart = await db.cart.findFirst({
      where: {
        userId: user.id,
        completed: false,
        deleted: false,
      },
    });

    if (!cart) {
      return new Response(JSON.stringify({ error: '저장된 카트가 없습니다.' }));
    }

    if (cart.items.length === 1) {
      // 카트 내 품목이 하나일 경우 카트 전체 삭제
      await db.cart.update({
        where: { id: cart.id },
        data: {
          deleted: true,
          updatedAt: new Date(),
        },
      });

      return new Response(JSON.stringify({ message: '카트 삭제' }));
    } else {
      // 카트 내 품목이 두 개 이상일 경우 품목만 삭제
      const updateCart = { ...cart };
      const idx = updateCart.items.findIndex((item: any) => {
        return item.id === itemId;
      });

      if (idx > -1) {
        updateCart.items.splice(idx, 1);
      }

      const freshCart = await db.cart.update({
        where: { id: cart.id },
        data: {
          ...(updateCart as any),
          updatedAt: new Date(),
        },
      });

      return new Response(JSON.stringify(freshCart));
    }
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
