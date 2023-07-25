import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  user: SerializeUser;
}

export default function UserContents({ user }: Props) {
  return (
    <div className={cx(styles.container)}>
      <table className={cx(styles.table)}>
        <tr className={cx(styles.table_row)}>
          <th className={cx(styles.table_head)}>ID</th>
          <td>{user.id}</td>
        </tr>
        <tr className={cx(styles.table_row)}>
          <th className={cx(styles.table_head)}>등급</th>
          <td>{user.admin ? '관리자' : '일반'}</td>
        </tr>
        <tr className={cx(styles.table_row)}>
          <th className={cx(styles.table_head)}>성명</th>
          <td>{user.username}</td>
        </tr>
        <tr className={cx(styles.table_row)}>
          <th className={cx(styles.table_head)}>등록일</th>
          <td>{new Date(user.createdAt).toLocaleDateString()}</td>
        </tr>
      </table>
    </div>
  );
}
