import type { Item } from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';
import Skelton from '@/app/components/Skelton';

const cx = classNames.bind(styles);

interface Props {
  items: Array<Item>;
  onReadItem: (id: string) => void;
}

export default function ItemsTable({ items, onReadItem }: Props) {
  return (
    <table className={cx(styles.container)}>
      <thead>
        <tr className={cx(styles.table_row)}>
          <th className={cx(styles.table_head)}>분류</th>
          <th className={cx(styles.table_head)}>구분</th>
          <th className={cx(styles.table_head)}>품명</th>
          <th className={cx(styles.table_head)}>단위</th>
          <th className={cx(styles.table_head)}>단가</th>
        </tr>
      </thead>

      <tbody>
        {items.length > 0 ? (
          items.map((item) => (
            <tr
              key={item.id}
              className={cx(styles.table_row, styles.target)}
              onClick={() => onReadItem(item.id)}
            >
              <td>{item.native}</td>
              <td>{item.divide}</td>
              <td>{item.name}</td>
              <td>{item.unit}</td>
              <td>{unitOfAccount(item.price, '원')}</td>
            </tr>
          ))
        ) : (
          <>
            {Array.from(Array(15), (_, i) => (
              <Skelton key={i} />
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}
