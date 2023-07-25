import db from '@/libs/database';
import { getQuery, serializeUser } from '@/libs/utils';

export async function GET(req: Request) {
  try {
    const username = getQuery(req, 'username') ?? '';
    const cursor = getQuery(req, 'cursor') ?? '';
    const cursorObj = cursor === '' ? undefined : { id: cursor };
    const limit = 30;

    const users = await db.user.findMany({
      where: {
        username: {
          contains: username,
        },
      },
      cursor: cursorObj,
      skip: cursor !== '' ? 1 : 0,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return new Response(
      JSON.stringify(
        users.map((data) => {
          return serializeUser(data);
        })
      )
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
