import type { Meal } from '@prisma/client';
import { unitOfAccount } from '@/libs/utils';

interface Props {
  meal: Meal;
}

export default function WeddingMeal({ meal }: Props) {
  return (
    <>
      <tr>
        <th colSpan={4}>식사비용</th>
      </tr>
      <tr>
        <th>구분</th>
        <th className="basic" style={{ background: 'white' }}>
          신랑
        </th>
        <th className="basic" style={{ background: 'white' }}>
          신부
        </th>
        <th className="basic" style={{ background: 'white' }}>
          계
        </th>
      </tr>

      <tr>
        <th>식대분할</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {(function () {
            if (meal.meals === 'privacy') {
              return '각각 결제';
            } else if (meal.meals === 'husband') {
              return '신랑 결제';
            } else if (meal.meals === 'bride') {
              return '신부 결제';
            } else {
              return '반반 결제';
            }
          })()}
        </td>
      </tr>

      <tr>
        <th>식대단가</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {unitOfAccount(meal.mealsPrice, '원')}
        </td>
      </tr>

      <tr>
        <th>하객인</th>
        <td>{meal.mealsNumHusband}명</td>
        <td>{meal.mealsNumBride}명</td>
        <td className="sub">{meal.mealsNumHusband + meal.mealsNumBride}명</td>
      </tr>

      <tr>
        <th>식대 총 비용</th>
        <td>{unitOfAccount(meal.mealsPrice * meal.mealsNumHusband, '원')}</td>
        <td>{unitOfAccount(meal.mealsPrice * meal.mealsNumBride, '원')}</td>
        <td className="sub">
          {unitOfAccount(
            meal.mealsPrice * (meal.mealsNumHusband + meal.mealsNumBride),
            '원'
          )}
        </td>
      </tr>
    </>
  );
}
