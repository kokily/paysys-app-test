import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props extends PropsWithChildren {
  href?: string;
  onClick?: () => void;
}

export default function NavItem({ children, href, onClick }: Props) {
  const jsx = (
    <div className={cx(styles.box)} onMouseDown={onClick}>
      {children}
    </div>
  );

  return href ? (
    <Link href={href} passHref={true}>
      <div className={cx(styles.container)}>{jsx}</div>
    </Link>
  ) : (
    jsx
  );
}
