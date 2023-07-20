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
