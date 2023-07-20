import type { Bill } from '@prisma/client';
import classNames from 'classnames';
import useLocalStorage from 'use-local-storage';
import styles from './styles.module.scss';
import Skelton from '@/app/components/Skelton';

const cx = classNames.bind(styles);

interface Props {
  fronts: Array<Bill>;
  onHallList: (hall: string) => void;
  onUserList: (userId: string) => void;
  onReadFront: (id: string) => void;
}

export default function ListContents({ ...rest }: Props) {
  const [, setScrollY] = useLocalStorage('listFrontsScroll', 0);

  return (
    <table className={cx(styles.container)}>
      <thead>
        <tr>
          <th className={cx(styles.table_head)}>날짜</th>
          <th className={cx(styles.table_head)}>행사명</th>
          <th className={cx(styles.table_head)}>장소</th>
          <th className={cx(styles.table_head)}>작성자</th>
        </tr>
      </thead>

      <tbody>
        {rest.fronts === null || rest.fronts.length === 0 ? (
          <>
            {Array.from(Array(15), (_, i) => (
              <Skelton key={i} />
            ))}
          </>
        ) : (
          <>
            {rest.fronts.map((front) => (
              <tr key={front.id}>
                <td className={cx(styles.table_data)}>
                  {new Date(front.createdAt).toLocaleDateString()}
                </td>

                <td className={cx(styles.table_data)}>
                  <strong
                    onClick={() => {
                      setScrollY(window.scrollY);
                      rest.onReadFront(front.id);
                    }}
                  >
                    {front.title.length > 20 ? (
                      <>{front.title.slice(0, 20)}...</>
                    ) : (
                      <>{front.title}</>
                    )}
                  </strong>
                </td>

                <td
                  className={cx(styles.table_data, styles.link)}
                  onClick={() => rest.onHallList(front.hall)}
                >
                  {front.hall}
                </td>

                <td
                  className={cx(styles.table_data, styles.link)}
                  onClick={() => rest.onUserList(front.userId!)}
                >
                  {front.username} 님
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}
