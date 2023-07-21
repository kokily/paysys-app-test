import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getId } from '@/libs/utils';

export async function DELETE(req: Request) {
  try {
    await checkAdmin();
    
    const id = getId(req);

    await db.item.delete({
      where: { id },
    });

    return new Response(JSON.stringify({ message: '품목 삭제 완료' }));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
