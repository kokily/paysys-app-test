import type { Bill } from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  front: Bill;
}

export default function FrontHeader({ front }: Props) {
  return (
    <>
      <div className={cx(styles.header)}>
        <h2>
          전표 세부내역
          <br />
          <small>[ {front.title} ]</small>
        </h2>
      </div>

      <div className={cx(styles.bar)} />

      <div className={cx(styles.contents)}>
        <table className={cx(styles.table)}>
          <tbody>
            <tr>
              <th>작성자</th>
              <td>{front.username} 님</td>
            </tr>
            <tr>
              <th>작성일자</th>
              <td>{new Date(front.createdAt).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th>작성시간</th>
              <td>{new Date(front.createdAt).toLocaleTimeString()}</td>
            </tr>
            <tr>
              <th>행사장소</th>
              <td>{front.hall}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
