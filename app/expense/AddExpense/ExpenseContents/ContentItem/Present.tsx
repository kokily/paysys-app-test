import type { ChangeEvent } from 'react';
import TableSelect from '../common/TableSelect';
import TableInput from '../common/TableInput';
import OneInput from '../common/OneInput';

interface Props extends PresentRequestType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function Present({ ...rest }: Props) {
  const provider = [
    { title: '각각 결제', value: 'privacy' },
    { title: '신랑 결제', value: 'husband' },
    { title: '신부 결제', value: 'bride' },
    { title: '반반 결제', value: 'half' },
  ];

  return (
    <>
      <h3>답례품 비용</h3>

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
            title="답례품분할"
            name="present"
            value={rest.present}
            onChange={rest.onChange}
            data={provider}
          />

          <OneInput
            title="답례품단가"
            name="presentPrice"
            value={rest.presentPrice.toString()}
            onChange={rest.onChange}
          />

          <TableInput
            title="하객인원"
            husbandName="presentNumHusband"
            husbandValue={rest.presentNumHusband.toString()}
            brideName="presentNumBride"
            brideValue={rest.presentNumBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />
        </tbody>
      </table>
    </>
  );
}
