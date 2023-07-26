import type { ChangeEvent } from 'react';
import TableSelect from '../common/TableSelect';
import TableInput from '../common/TableInput';
import OneInput from '../common/OneInput';

interface Props extends MealRequestType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function Meal({ ...rest }: Props) {
  const provider = [
    { title: '각각 결제', value: 'privacy' },
    { title: '신랑 결제', value: 'husband' },
    { title: '신부 결제', value: 'bride' },
    { title: '반반 결제', value: 'half' },
  ];

  return (
    <>
      <h3>식사 비용</h3>

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
            title="식대분할"
            name="meals"
            value={rest.meals}
            onChange={rest.onChange}
            data={provider}
          />

          <OneInput
            title="식대단가"
            name="mealsPrice"
            value={rest.mealsPrice.toString()}
            onChange={rest.onChange}
          />

          <TableInput
            title="하객인원"
            husbandName="mealsNumHusband"
            husbandValue={rest.mealsNumHusband.toString()}
            brideName="mealsNumBride"
            brideValue={rest.mealsNumBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />
        </tbody>
      </table>
    </>
  );
}
