import type { Convention } from '@prisma/client';
import { unitOfAccount } from '@/libs/utils';

interface Props {
  convention: Convention;
}

export default function WeddingConvention({ convention }: Props) {
  return (
    <>
      <tr>
        <th>구분</th>
        <th className="basic" style={{ background: 'white' }}>
          신랑
        </th>
        <th className="basic" style={{ background: 'white' }}>
          신부
        </th>
        <th className="basic" style={{ background: 'white' }}>
          계
        </th>
      </tr>

      <tr>
        <th>웨딩홀 사용료</th>
        <td>{unitOfAccount(convention.rentalHusband, '원')}</td>
        <td>{unitOfAccount(convention.rentalBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(
            convention.rentalHusband + convention.rentalBride,
            '원'
          )}
        </td>
      </tr>

      <tr>
        <th>예도칼</th>
        <td>{unitOfAccount(convention.swordHusband, '원')}</td>
        <td>{unitOfAccount(convention.swordBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(convention.swordHusband + convention.swordBride, '원')}
        </td>
      </tr>

      <tr>
        <th>장 갑</th>
        <td>{unitOfAccount(convention.gloveHusband, '원')}</td>
        <td>{unitOfAccount(convention.gloveBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(convention.gloveHusband + convention.gloveBride, '원')}
        </td>
      </tr>

      <tr>
        <th>부 케</th>
        <td>{unitOfAccount(convention.bouquetHusband, '원')}</td>
        <td>{unitOfAccount(convention.bouquetBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(
            convention.bouquetHusband + convention.bouquetBride,
            '원'
          )}
        </td>
      </tr>
    </>
  );
}
