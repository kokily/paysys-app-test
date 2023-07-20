import db from '@/libs/database';
import { getSessionUser } from '@/libs/getSessionUser';

export async function DELETE() {
  try {
    const { id } = await getSessionUser();

    const cart = await db.cart.findFirst({
      where: { userId: id, completed: false, deleted: false },
    });

    await db.cart.update({
      where: { id: cart?.id },
      data: {
        deleted: true,
        updatedAt: new Date(),
      },
    });

    return new Response(JSON.stringify({ message: '카트 삭제 완료' }));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
