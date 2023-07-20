'use client';

import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const cx = classNames.bind(styles);

export default function PageTemplate({ children }: PropsWithChildren) {
  return (
    <div className={cx(styles.container)}>
      <Header />

      <main className={cx(styles.main)}>{children}</main>

      <Footer />
    </div>
  );
}
