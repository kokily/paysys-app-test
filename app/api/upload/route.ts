import { writeFile } from 'fs/promises';
import path from 'path';
import moment from 'moment';
import { checkAdmin } from '@/libs/session';

export async function POST(req: Request) {
  try {
    await checkAdmin();
    
    const data = await req.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return new Response(
        JSON.stringify({ error: '업로드 된 파일이 없습니다.' })
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${moment().format('YYYYMMDDHHmmdd')}${file.name.trim()}`;

    const target = path.resolve(`${process.cwd()}/public/uploads/${filename}`);

    await writeFile(target, buffer);

    console.log(`open ${path} to see the uploaded file`);

    return new Response(JSON.stringify({ filename }));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
