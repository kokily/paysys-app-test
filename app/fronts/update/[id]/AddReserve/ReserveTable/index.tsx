import classNames from 'classnames';
import styles from './styles.module.scss';
import useAddReserve from '../useAddReserve';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

export default function ReserveTable() {
  const { reserve, reserveRef, onBack, onChange, onAddReserve } =
    useAddReserve();

  return (
    <form onSubmit={onAddReserve}>
      <div className={cx(styles.container)}>
        <table className={cx(styles.table)}>
          <tbody>
            <tr className={cx(styles.row)}>
              <th className={cx(styles.table_head)}>금액</th>
              <td>
                <input
                  className={cx(styles.input)}
                  type="number"
                  name="reserve"
                  value={reserve}
                  ref={reserveRef}
                  onChange={onChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={cx(styles.buttons)}>
        <Button color="cancel" onClick={onBack}>
          취 소
        </Button>
        <Button color="submit" type="submit">
          확 인
        </Button>
      </div>
    </form>
  );
}
