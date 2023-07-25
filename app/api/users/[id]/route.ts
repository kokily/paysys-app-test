import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getId, serializeUser } from '@/libs/utils';

export async function GET(req: Request) {
  try {
    const id = getId(req);

    await checkAdmin();

    const user = await db.user.findUnique({
      where: { id },
    });

    return new Response(JSON.stringify(serializeUser(user!)));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
