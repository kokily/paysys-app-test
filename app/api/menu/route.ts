import db from '@/libs/database';
import { getQuery } from '@/libs/utils';

export async function GET(req: Request) {
  try {
    const divide = getQuery(req, 'divide');
    const native = getQuery(req, 'native');

    const menu = await db.item.findMany({
      where: {
        divide: {
          contains: divide,
        },
        native: {
          contains: native,
        },
      },
    });

    return new Response(JSON.stringify(menu));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
