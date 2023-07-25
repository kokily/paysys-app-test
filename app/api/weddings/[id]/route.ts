import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getId } from '@/libs/utils';

export async function GET(req: Request) {
  try {
    const id = getId(req);

    await checkAdmin();

    const wedding = await db.wedding.findUnique({
      where: { id },
    });

    const company = await db.company.findUnique({
      where: { weddingId: id },
    });

    const convention = await db.convention.findUnique({
      where: { weddingId: id },
    });

    const event = await db.event.findUnique({
      where: { weddingId: id },
    });

    const hanbok = await db.hanbok.findUnique({
      where: { weddingId: id },
    });

    const meal = await db.meal.findUnique({
      where: { weddingId: id },
    });

    const present = await db.present.findUnique({
      where: { weddingId: id },
    });

    const reserve = await db.reserve.findUnique({
      where: { weddingId: id },
    });

    const prepayment = await db.prepayment.findUnique({
      where: { weddingId: id },
    });

    return new Response(
      JSON.stringify({
        wedding,
        convention,
        company,
        event,
        hanbok,
        meal,
        present,
        reserve,
        prepayment,
      })
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
