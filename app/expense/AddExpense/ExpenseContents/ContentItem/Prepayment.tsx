import type { ChangeEvent } from 'react';
import TableInput from '../common/TableInput';

interface Props extends PrepaymentRequestType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function Prepayment({ ...rest }: Props) {
  return (
    <>
      <h3>선결제</h3>

      <table>
        <tbody>
          <tr>
            <th>구 분</th>
            <th className="basic" style={{ background: 'skyblue' }}>
              신랑
            </th>
            <th className="basic" style={{ background: 'pink' }}>
              신부
            </th>
            <th className="basic red">계</th>
          </tr>

          <TableInput
            title="선결제"
            husbandName="prepaymentHusband"
            husbandValue={rest.prePaymentHusband.toString()}
            brideName="prepaymentBride"
            brideValue={rest.prePaymentBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />
        </tbody>
      </table>
    </>
  );
}
