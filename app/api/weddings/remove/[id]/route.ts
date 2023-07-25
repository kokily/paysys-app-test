import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getId } from '@/libs/utils';

export async function DELETE(req: Request) {
  try {
    const id = getId(req);

    await checkAdmin();

    await db.wedding.delete({ where: { id } });
    await db.company.delete({ where: { weddingId: id } });
    await db.convention.delete({ where: { weddingId: id } });
    await db.event.delete({ where: { weddingId: id } });
    await db.hanbok.delete({ where: { weddingId: id } });
    await db.meal.delete({ where: { weddingId: id } });
    await db.present.delete({ where: { weddingId: id } });
    await db.reserve.delete({ where: { weddingId: id } });
    await db.prepayment.delete({ where: { weddingId: id } });

    return new Response(JSON.stringify({ message: '웨딩빌지 삭제 완료' }));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
