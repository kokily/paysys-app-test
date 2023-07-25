import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';

export async function POST(req: Request) {
  try {
    const { weddingId, sex, image }: AddSignPayload = await req.json();

    await checkAdmin();

    const sign = await db.wedding.update({
      where: { id: weddingId },
      data:
        sex === 'husband'
          ? {
              husbandImage: image,
              updatedAt: new Date(),
            }
          : {
              brideImage: image,
              updatedAt: new Date(),
            },
    });

    return new Response(JSON.stringify(sign));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
