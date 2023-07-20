import classNames from 'classnames';
import styles from './styles.module.scss';
import useChangePassword from '../useChangePassword';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

export default function PasswordTable() {
  const { password, passwordRef, onBack, onChange, onChangePassword } =
    useChangePassword();

  return (
    <form onSubmit={onChangePassword}>
      <div className={cx(styles.container)}>
        <table className={cx(styles.table)}>
          <tbody>
            <tr className={cx(styles.row)}>
              <th className={cx(styles.table_head)}>변경할 비밀번호</th>
              <td>
                <input
                  className={cx(styles.input)}
                  type="password"
                  value={password}
                  ref={passwordRef}
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
