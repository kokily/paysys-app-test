import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getQuery } from '@/libs/utils';

export async function GET(req: Request) {
  try {
    const date = getQuery(req, 'date') ?? '';
    const cursor = getQuery(req, 'cursor') ?? '';
    const cursorObj = cursor === '' ? undefined : { id: cursor };
    const limit = 40;

    await checkAdmin();

    const weddings = await db.wedding.findMany({
      where: {
        eventAt: {
          contains: date,
        },
      },
      cursor: cursorObj,
      skip: cursor !== '' ? 1 : 0,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return new Response(JSON.stringify(weddings));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
