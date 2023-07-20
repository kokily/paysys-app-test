import db from '@/libs/database';
import { getId } from '@/libs/utils';

export async function GET(req: Request) {
  try {
    const id = getId(req);

    const bill = await db.bill.findUnique({
      where: { id },
    });

    return new Response(JSON.stringify(bill));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
