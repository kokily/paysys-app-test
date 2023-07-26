import type { ChangeEvent } from 'react';
import TableSelect from '../common/TableSelect';
import OneInput from '../common/OneInput';

interface Props extends ReserveRequestType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function Reserve({ ...rest }: Props) {
  const provider = [
    { title: '예약금 반반', value: 'half' },
    { title: '예약금 신랑', value: 'husband' },
    { title: '예약금 신부', value: 'bride' },
  ];

  return (
    <>
      <h3>예약금</h3>

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

          <TableSelect
            title="예약금 분할"
            name="reserve"
            value={rest.reserve}
            onChange={rest.onChange}
            data={provider}
          />

          <OneInput
            title="예약금"
            name="reservePay"
            value={rest.reservePay.toString()}
            onChange={rest.onChange}
          />
        </tbody>
      </table>
    </>
  );
}
