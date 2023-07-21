import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getId } from '@/libs/utils';

export async function GET(req: Request) {
  try {
    await checkAdmin();
    
    const id = getId(req);

    const item = await db.item.findUnique({
      where: { id },
    });

    return new Response(JSON.stringify(item));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
