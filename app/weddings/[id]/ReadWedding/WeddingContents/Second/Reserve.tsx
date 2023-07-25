import type { Reserve } from '@prisma/client';
import { unitOfAccount } from '@/libs/utils';

interface Props {
  reserve: Reserve;
}

export default function WeddingReserve({ reserve }: Props) {
  return (
    <>
      <tr>
        <th colSpan={4}>예약금</th>
      </tr>

      <tr>
        <th>예약금 분할</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {(function () {
            if (reserve.reserve === 'half') {
              return '예약금 반반';
            } else if (reserve.reserve === 'husband') {
              return '예약금 신랑';
            } else {
              return '예약금 신부';
            }
          })()}
        </td>
      </tr>

      <tr>
        <th>예약금</th>
        <td style={{ color: 'red' }}>
          {(function () {
            if (reserve.reserve === 'half') {
              return `-${unitOfAccount(reserve.reservePay / 2, '원')}`;
            } else if (reserve.reserve === 'husband') {
              return `-${unitOfAccount(reserve.reservePay, '원')}`;
            } else {
              return `0원`;
            }
          })()}
        </td>
        <td style={{ color: 'red' }}>
          {(function () {
            if (reserve.reserve === 'half') {
              return `-${unitOfAccount(reserve.reservePay / 2, '원')}`;
            } else if (reserve.reserve === 'husband') {
              return `0원`;
            } else {
              return `-${unitOfAccount(reserve.reservePay, '원')}`;
            }
          })()}
        </td>
        <td className="sub" style={{ color: 'red' }}>
          -{unitOfAccount(reserve.reservePay, '원')}
        </td>
      </tr>
    </>
  );
}
