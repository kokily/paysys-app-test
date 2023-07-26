import type { ChangeEvent } from 'react';
import TableInput from '../common/TableInput';

interface Props extends ConventionRequestType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function Convention({ ...rest }: Props) {
  return (
    <>
      <h3>컨벤션 비용</h3>

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
            title="웨딩홀 사용료"
            husbandName="rentalHusband"
            husbandValue={rest.rentalHusband.toString()}
            brideName="rentalBride"
            brideValue={rest.rentalBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="예도칼"
            husbandName="swordHusband"
            husbandValue={rest.swordHusband.toString()}
            brideName="swordBride"
            brideValue={rest.swordBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="장 갑"
            husbandName="gloveHusband"
            husbandValue={rest.gloveHusband.toString()}
            brideName="gloveBride"
            brideValue={rest.gloveBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="부 케"
            husbandName="bouquetHusband"
            husbandValue={rest.bouquetHusband.toString()}
            brideName="bouquetBride"
            brideValue={rest.bouquetBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />
        </tbody>
      </table>
    </>
  );
}
