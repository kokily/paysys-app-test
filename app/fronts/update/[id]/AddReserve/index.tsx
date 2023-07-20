'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import ReserveTable from './ReserveTable';

const cx = classNames.bind(styles);

export default function AddReserve() {
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.logo_box)}>
        <h2>예약금 추가</h2>
      </div>

      <ReserveTable />
    </div>
  );
}
