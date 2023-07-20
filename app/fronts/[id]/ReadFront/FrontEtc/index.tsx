import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  etc: string;
}

export default function FrontEtc({ etc }: Props) {
  return (
    <>
      <hr />
      <div className={cx(styles.container)}>
        <span className={cx(styles.contents)}>{etc}</span>
      </div>
    </>
  );
}
