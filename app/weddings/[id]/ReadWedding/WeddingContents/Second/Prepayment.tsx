import type { Prepayment } from '@prisma/client';
import { unitOfAccount } from '@/libs/utils';

interface Props {
  prepayment: Prepayment | null;
}

export default function WeddingPrepayment({ prepayment }: Props) {
  return (
    <>
      {prepayment ? (
        <tr>
          <th>선입금</th>

          <td style={{ color: 'red' }}>
            -{unitOfAccount(prepayment.prePaymentHusband, '원')}
          </td>
          <td style={{ color: 'red' }}>
            -{unitOfAccount(prepayment.prePaymentBride, '원')}
          </td>
          <td className="sub" style={{ color: 'red' }}>
            -
            {unitOfAccount(
              prepayment.prePaymentHusband + prepayment.prePaymentBride,
              '원'
            )}
          </td>
        </tr>
      ) : (
        <tr>
          <th>선입금</th>

          <td style={{ color: 'red' }}>-0원</td>
          <td style={{ color: 'red' }}>-0원</td>
          <td className="sub" style={{ color: 'red' }}>
            -0원
          </td>
        </tr>
      )}
    </>
  );
}
