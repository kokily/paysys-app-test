import type { Company } from '@prisma/client';
import { unitOfAccount } from '@/libs/utils';

interface Props {
  company: Company;
}

export default function WeddingCompany({ company }: Props) {
  return (
    <>
      <tr>
        <th>웨딩업체</th>
        <td>{unitOfAccount(company.companyHusband, '원')}</td>
        <td>{unitOfAccount(company.companyBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(company.companyHusband + company.companyBride, '원')}
        </td>
      </tr>

      <tr>
        <th>야간옥상전구</th>
        <td>{unitOfAccount(company.roofTopHusband, '원')}</td>
        <td>{unitOfAccount(company.roofTopBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(company.roofTopHusband + company.roofTopBride, '원')}
        </td>
      </tr>

      <tr>
        <th>메이크업(여)</th>
        <td>{unitOfAccount(company.ownerWomanHusband, '원')}</td>
        <td>{unitOfAccount(company.ownerWomanBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(
            company.ownerWomanHusband + company.ownerWomanBride,
            '원'
          )}
        </td>
      </tr>

      <tr>
        <th>메이크업(남)</th>
        <td>{unitOfAccount(company.ownerManHusband, '원')}</td>
        <td>{unitOfAccount(company.ownerManBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(company.ownerManHusband + company.ownerManBride, '원')}
        </td>
      </tr>

      <tr>
        <th>셀 렉</th>
        <td>{unitOfAccount(company.selectHusband, '원')}</td>
        <td>{unitOfAccount(company.selectBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(company.selectHusband + company.selectBride, '원')}
        </td>
      </tr>

      <tr>
        <th>액 자</th>
        <td>{unitOfAccount(company.frameHusband, '원')}</td>
        <td>{unitOfAccount(company.frameBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(company.frameHusband + company.frameBride, '원')}
        </td>
      </tr>

      <tr>
        <th>드레스</th>
        <td>{unitOfAccount(company.dressHusband, '원')}</td>
        <td>{unitOfAccount(company.dressBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(company.dressHusband + company.dressBride, '원')}
        </td>
      </tr>

      <tr>
        <th>헤어피스</th>
        <td>{unitOfAccount(company.hairpinHusband, '원')}</td>
        <td>{unitOfAccount(company.hairpinBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(company.hairpinHusband + company.hairpinBride, '원')}
        </td>
      </tr>

      <tr>
        <th>가 발</th>
        <td>{unitOfAccount(company.wigHusband, '원')}</td>
        <td>{unitOfAccount(company.wigBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(company.wigHusband + company.wigBride, '원')}
        </td>
      </tr>

      <tr>
        <th>비디오촬영</th>
        <td>{unitOfAccount(company.videoHusband, '원')}</td>
        <td>{unitOfAccount(company.videoBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(company.videoHusband + company.videoBride, '원')}
        </td>
      </tr>

      <tr>
        <th>기 타</th>
        <td>{unitOfAccount(company.etcHusband, '원')}</td>
        <td>{unitOfAccount(company.etcBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(company.etcHusband + company.etcBride, '원')}
        </td>
      </tr>
    </>
  );
}
