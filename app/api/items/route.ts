import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getQuery } from '@/libs/utils';

export async function GET(req: Request) {
  try {
    await checkAdmin();

    const name = getQuery(req, 'name') ?? '';
    const cursor = getQuery(req, 'cursor') ?? '';
    const cursorObj = cursor === '' ? undefined : { id: cursor };
    const limit = 30;

    const items = await db.item.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      cursor: cursorObj,
      skip: cursor !== '' ? 1 : 0,
      take: limit,
      orderBy: {
        num: 'desc',
      },
    });

    return new Response(JSON.stringify(items));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
