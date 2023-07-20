import db from '@/libs/database';

export async function POST(req: Request) {
  try {
    const { title, hall, etc, userId, username }: AddBillPayload =
      await req.json();

    const cart = await db.cart.findFirst({
      where: {
        userId,
        completed: false,
        deleted: false,
      },
    });

    if (!cart) {
      return new Response(JSON.stringify({ error: '저장된 카트가 없습니다.' }));
    }

    let totalAmount = 0;

    cart.items.map((item: any) => {
      return (totalAmount += item.amount);
    });

    const bill = await db.bill.create({
      data: {
        title,
        hall,
        etc,
        items: cart.items as any,
        totalAmount,
        userId,
        username,
        cartId: cart.id,
      },
    });

    await db.cart.update({
      where: { id: cart.id },
      data: {
        completed: true,
        updatedAt: new Date(),
      },
    });

    return new Response(JSON.stringify(bill));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
