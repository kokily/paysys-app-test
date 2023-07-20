import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';

export async function POST(req: Request) {
  try {
    await checkAdmin();

    const { billId, reserve }: AddReservePayload = await req.json();

    const bill = await db.bill.update({
      where: { id: billId },
      data: {
        reserve,
        updatedAt: new Date(),
      },
    });

    return new Response(JSON.stringify(bill));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
