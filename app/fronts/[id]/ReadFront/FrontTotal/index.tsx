import type { Bill } from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';

const cx = classNames.bind(styles);

interface Props {
  front: Bill;
}

export default function FrontTotal({ front }: Props) {
  return (
    <div className={cx(styles.container)}>
      {front.reserve ? (
        <>
          <div className={cx(styles.pane)}>
            총 금액:
            <span className={cx(styles.all_payment)}>
              {unitOfAccount(front.totalAmount, '원')}
            </span>
          </div>
          <div className={cx(styles.pane)}>
            예약금 :
            <span className={cx(styles.reserve)}>
              {unitOfAccount(front.reserve, '원')}
            </span>
          </div>
          <div className={cx(styles.pane)}>
            결제금액 :
            <span className={cx(styles.payment)}>
              {unitOfAccount(front.totalAmount - front.reserve, '원')}
            </span>
          </div>
        </>
      ) : (
        <div className={cx(styles.pane)}>
          결제금액 :{' '}
          <span className={cx(styles.payment)}>
            {unitOfAccount(front.totalAmount, '원')}
          </span>
        </div>
      )}
    </div>
  );
}
