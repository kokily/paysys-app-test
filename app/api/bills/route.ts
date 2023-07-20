import db from '@/libs/database';
import { getQuery } from '@/libs/utils';

export async function GET(req: Request) {
  try {
    const title = getQuery(req, 'title');
    const hall = getQuery(req, 'hall');
    const userId = getQuery(req, 'userId');
    const cursor = getQuery(req, 'cursor') ?? '';
    const cursorObj = cursor === '' ? undefined : { id: cursor };
    const limit = 40;

    const bills = await db.bill.findMany({
      where: {
        title: {
          contains: title,
        },
        hall: {
          contains: hall,
        },
        userId: {
          contains: userId,
        },
      },
      cursor: cursorObj,
      skip: cursor !== '' ? 1 : 0,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return new Response(JSON.stringify(bills));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
