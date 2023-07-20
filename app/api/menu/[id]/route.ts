import db from '@/libs/database';
import { getId } from '@/libs/utils';

export async function GET(req: Request) {
  try {
    const id = getId(req);

    const menu = await db.item.findUnique({
      where: { id },
    });

    return new Response(JSON.stringify(menu));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
