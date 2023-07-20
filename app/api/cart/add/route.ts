import db from '@/libs/database';

export async function POST(req: Request) {
  try {
    const { itemId, userId, count, price }: AddCartPayload = await req.json();

    const item = await db.item.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      return new Response(
        JSON.stringify({ error: '존재하지 않는 품목입니다.' })
      );
    }

    const prevCart = await db.cart.findFirst({
      where: {
        userId,
        completed: false,
        deleted: false,
      },
    });

    const addItemModel = {
      id: item.id,
      name: item.name,
      divide: item.divide,
      native: item.native,
      unit: item.unit,
      price,
      count,
      amount: count * price,
    };

    // 카트 존재 유무 분기
    if (!prevCart) {
      // 기존 카트 없음. 새 카트 생성
      const cart = await db.cart.create({
        data: { items: [addItemModel], userId },
      });

      return new Response(JSON.stringify(cart));
    } else {
      // 기존 카트에 품목 추가
      const updateCart = [...prevCart.items, addItemModel];

      const cart = await db.cart.update({
        where: { id: prevCart.id },
        data: {
          ...prevCart,
          items: updateCart as any,
          updatedAt: new Date(),
        },
      });

      return new Response(JSON.stringify(cart));
    }
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
