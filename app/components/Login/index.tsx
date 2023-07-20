'use client';

import classnames from 'classnames';
import styles from './styles.module.scss';
import Link from 'next/link';
import LoginForm from './LoginForm';

const cx = classnames.bind(styles);

export default function Login() {
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.logo)}>
        <Link href="/">
          <div className={cx(styles.logo_link)}>로그인</div>
        </Link>
      </div>

      <LoginForm />
    </div>
  );
}
