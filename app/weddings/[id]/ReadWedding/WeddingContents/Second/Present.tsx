import type { Present } from '@prisma/client';
import { unitOfAccount } from '@/libs/utils';

interface Props {
  present: Present;
}

export default function WeddingPresent({ present }: Props) {
  return (
    <>
      <tr>
        <th colSpan={4}>답례품 비용</th>
      </tr>

      <tr>
        <th>답례품 분할</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {(function () {
            if (present.present === 'privacy') {
              return '각각 결제';
            } else if (present.present === 'husband') {
              return '신랑 결제';
            } else if (present.present === 'bride') {
              return '신부 결제';
            } else {
              return '반반 결제';
            }
          })()}
        </td>
      </tr>

      <tr>
        <th>답례품 단가</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {unitOfAccount(present.presentPrice, '원')}원
        </td>
      </tr>

      <tr>
        <th>하객 인원</th>
        <td>{present.presentNumHusband}명</td>
        <td>{present.presentNumBride}명</td>
        <td className="sub">
          {present.presentNumHusband + present.presentNumBride}명
        </td>
      </tr>

      <tr>
        <th>답례품 총 비용</th>
        <td>
          {unitOfAccount(
            present.presentPrice * present.presentNumHusband,
            '원'
          )}
        </td>
        <td>
          {unitOfAccount(present.presentPrice * present.presentNumBride, '원')}
        </td>
        <td className="sub">
          {unitOfAccount(
            present.presentPrice *
              (present.presentNumHusband + present.presentNumBride),
            '원'
          )}
        </td>
      </tr>
    </>
  );
}
