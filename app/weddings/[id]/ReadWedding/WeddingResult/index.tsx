import type { Meal, Prepayment, Present, Wedding } from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';
import useWeddingResult from './useWeddingResult';
import { unitOfAccount } from '@/libs/utils';

const cx = classNames.bind(styles);

interface Props {
  wedding: Wedding;
  meal: Meal;
  present: Present;
  prepayment: Prepayment;
}

export default function WeddingResult({ ...rest }: Props) {
  const { allCost, payment, husbandCost, brideCost } = useWeddingResult(rest);

  return (
    <table className={cx(styles.container)}>
      <tbody>
        <tr>
          <td colSpan={4} rowSpan={9}>
            <h3 className={cx(styles.title, styles.allCost)}>
              웨딩 총 비용: {unitOfAccount(allCost, '원')}
            </h3>
            <h3 className={cx(styles.title, styles.result)}>
              결제 총 비용: {unitOfAccount(payment, '원')}
            </h3>
            <h3 className={cx(styles.title)}>
              신랑 총 비용: {unitOfAccount(husbandCost, '원')}
            </h3>
            <h3 className={cx(styles.title)}>
              신부 총 비용: {unitOfAccount(brideCost, '원')}
            </h3>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
