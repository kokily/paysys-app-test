import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export default function Skelton() {
  return (
    <tr className={cx(styles.container)}>
      <td colSpan={5} className={cx(styles.skelton)}></td>
    </tr>
  );
}
