import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getId } from '@/libs/utils';

export async function DELETE(req: Request) {
  try {
    const id = getId(req);

    await checkAdmin();
    await db.bill.update({
      where: { id },
      data: {
        reserve: 0,
        updatedAt: new Date(),
      },
    });

    return new Response(JSON.stringify({ message: '예약금 삭제 완료' }));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
