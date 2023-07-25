import db from '@/libs/database';
import { getId } from '@/libs/utils';

export async function DELETE(req: Request) {
  try {
    const id = getId(req);

    await db.user.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: '사용자가 삭제되었습니다.' })
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
