'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import PasswordTable from './PasswordTable';

const cx = classNames.bind(styles);

export default function ChangePassword() {
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.logo_box)}>
        <h2>비밀번호 변경</h2>
      </div>

      <PasswordTable />
    </div>
  );
}
