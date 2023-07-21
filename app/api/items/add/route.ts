import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';

export async function POST(req: Request) {
  try {
    await checkAdmin();
    
    const { name, divide, native, unit, price }: AddItemPayload =
      await req.json();

    const itemsCount = await db.item.count();
    const item = await db.item.create({
      data: { name, divide, native, unit, price, num: itemsCount + 1 },
    });

    return new Response(JSON.stringify(item));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
