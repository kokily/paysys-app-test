import Link from 'next/link';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  pathname: string;
}

export default function Logo({ pathname }: Props) {
  return (
    <Link href="/soldier">
      <button className={cx(styles.button, styles[pathname])}>
        행사전표시스템
      </button>
    </Link>
  );
}
