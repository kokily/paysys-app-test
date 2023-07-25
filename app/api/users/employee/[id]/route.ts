import db from '@/libs/database';
import { getId, serializeUser } from '@/libs/utils';

export async function PATCH(req: Request) {
  try {
    const id = getId(req);

    const user = await db.user.update({
      where: { id },
      data: {
        admin: false,
        updatedAt: new Date(),
      },
    });

    return new Response(JSON.stringify(serializeUser(user)));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
