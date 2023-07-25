import classNames from 'classnames';
import styles from './styles.module.scss';
import Skelton from '@/app/components/Skelton';

const cx = classNames.bind(styles);

interface Props {
  users: Array<SerializeUser>;
  onReadUser: (id: string) => void;
}

export default function UsersTable({ users, onReadUser }: Props) {
  return (
    <div className={cx(styles.container)}>
      <table>
        <thead>
          <tr className={cx(styles.table_row)}>
            <th className={cx(styles.table_head)}>성명</th>
            <th className={cx(styles.table_head)}>가입일</th>
            <th className={cx(styles.table_head)}>관리자</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className={cx(styles.table_row, styles.target)}
                onClick={() => onReadUser(user.id)}
              >
                <td>{user.username}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>{user.admin ? '관리자' : '일반'}</td>
              </tr>
            ))
          ) : (
            <>
              {Array.from(Array(20), (_, i) => (
                <Skelton key={i} />
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
