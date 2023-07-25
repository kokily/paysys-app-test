import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getId } from '@/libs/utils';

export async function DELETE(req: Request) {
  try {
    const id = getId(req);

    await checkAdmin();

    await db.wedding.update({
      where: { id },
      data: {
        husbandImage: '',
        brideImage: '',
        updatedAt: new Date(),
      },
    });

    return new Response(JSON.stringify({ message: '서명 삭제!' }));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
