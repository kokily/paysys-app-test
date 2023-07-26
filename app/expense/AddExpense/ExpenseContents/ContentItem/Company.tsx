import type { ChangeEvent } from 'react';
import TableInput from '../common/TableInput';

interface Props extends CompanyRequestType {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function Company({ ...rest }: Props) {
  return (
    <>
      <h3>웨딩업체</h3>

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
            title="웨딩업체"
            husbandName="companyHusband"
            husbandValue={rest.companyHusband.toString()}
            brideName="companyBride"
            brideValue={rest.companyBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="야간옥상전구"
            husbandName="roofTopHusband"
            husbandValue={rest.roofTopHusband.toString()}
            brideName="roofTopBride"
            brideValue={rest.roofTopBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="메이크업(여)"
            husbandName="ownerWomanHusband"
            husbandValue={rest.ownerWomanHusband.toString()}
            brideName="ownerWomanBride"
            brideValue={rest.ownerWomanBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="메이크업(남)"
            husbandName="ownerManHusband"
            husbandValue={rest.ownerManHusband.toString()}
            brideName="ownerManBride"
            brideValue={rest.ownerManBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="셀 렉"
            husbandName="selectHusband"
            husbandValue={rest.selectHusband.toString()}
            brideName="selectBride"
            brideValue={rest.selectBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="액 자"
            husbandName="frameHusband"
            husbandValue={rest.frameHusband.toString()}
            brideName="frameBride"
            brideValue={rest.frameBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="드레스"
            husbandName="dressHusband"
            husbandValue={rest.dressHusband.toString()}
            brideName="dressBride"
            brideValue={rest.dressBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="헤어피스"
            husbandName="hairpinHusband"
            husbandValue={rest.hairpinHusband.toString()}
            brideName="hairpinBride"
            brideValue={rest.hairpinBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="가 발"
            husbandName="wigHusband"
            husbandValue={rest.wigHusband.toString()}
            brideName="wigBride"
            brideValue={rest.wigBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="비디오촬영"
            husbandName="videoHusband"
            husbandValue={rest.videoHusband.toString()}
            brideName="videoBride"
            brideValue={rest.videoBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />

          <TableInput
            title="기 타"
            husbandName="etcHusband"
            husbandValue={rest.etcHusband.toString()}
            brideName="etcBride"
            brideValue={rest.etcBride.toString()}
            onChange={rest.onChange}
            unit="원"
          />
        </tbody>
      </table>
    </>
  );
}
