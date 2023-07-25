import type { Company, Convention, Wedding } from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';
import WeddingConvention from './Convention';
import WeddingCompany from './Company';

const cx = classNames.bind(styles);

interface Props {
  wedding: Wedding;
  convention: Convention;
  company: Company;
}

export default function First({ wedding, convention, company }: Props) {
  return (
    <table className={cx(styles.container)}>
      <tbody>
        <tr>
          <th colSpan={4}>예식비용</th>
        </tr>

        <WeddingConvention convention={convention} />
        <WeddingCompany company={company} />

        <tr>
          <th className={cx(styles.red)}>총 예식비용</th>
          <td className={cx(styles.cost)}>
            {unitOfAccount(wedding.costHusband, '원')}
          </td>
          <td className={cx(styles.cost)}>
            {unitOfAccount(wedding.costBride, '원')}
          </td>
          <td className={cx(styles.allCost)}>
            {unitOfAccount(wedding.costHusband + wedding.costBride, '원')}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
