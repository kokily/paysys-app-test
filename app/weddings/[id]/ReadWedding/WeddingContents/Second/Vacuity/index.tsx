import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export default function Vacuity() {
  return (
    <tr>
      <th className={cx(styles.table_header)} colSpan={4}></th>
    </tr>
  );
}
