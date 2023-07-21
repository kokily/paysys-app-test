import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getId } from '@/libs/utils';

export async function PATCH(req: Request) {
  try {
    await checkAdmin();

    const id = getId(req);
    const payload: AddItemPayload = await req.json();

    const item = await db.item.update({
      where: { id },
      data: {
        ...payload,
        updatedAt: new Date(),
      },
    });

    return new Response(JSON.stringify(item));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
