import type { User } from '@prisma/client';

export function getQuery(req: Request, query: string) {
  const url = new URL(req.url);
  const response = url.searchParams.get(`${query}`) as string;

  return response;
}

export function getId(req: Request) {
  return new URL(req.url).toString().split('/').reverse()[0];
}

export function getFrontId(pathname: string) {
  return pathname.split('/').reverse()[0];
}

export function unitOfAccount(target: number, unit: string) {
  return `${target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${unit}`;
}

export function serializeUser(data: User): SerializeUser {
  const target: SerializeUser = {
    id: data.id,
    username: data.username,
    admin: data.admin,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };

  return target;
}

export function maskingName(name: string): string {
  if (name.length > 2) {
    let originalName = name.split('');

    originalName.map((_, i) => {
      if (i === 0 || i === originalName.length - 1) return;

      originalName[i] = '*';
    });

    let combineName = originalName.join();

    return combineName.replace(/,/g, '');
  } else {
    return name.replace(/.$/, '*');
  }
}

export function dataURItoBlob(uri: string) {
  // Base64 Decode
  const blob = window.atob(uri.split(',')[1]);
  let array: number[] = [];

  for (let i = 0; i < blob.length; i++) {
    array.push(blob.charCodeAt(i));
  }

  const file = new Blob([new Uint8Array(array)], {
    type: 'image/png',
  });

  return file;
}
