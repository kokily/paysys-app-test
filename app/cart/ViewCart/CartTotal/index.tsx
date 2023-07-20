'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';

const cx = classNames.bind(styles);

interface Props {
  totalAmount: number;
}

export default function CartTotal({ totalAmount }: Props) {
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.total)}>
        예상 결제금액 :{' '}
        <span className={cx(styles.price)}>
          {unitOfAccount(totalAmount, '원')}
        </span>
      </div>
    </div>
  );
}
