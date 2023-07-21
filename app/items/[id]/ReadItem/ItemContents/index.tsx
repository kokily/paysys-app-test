import type { Item } from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';

const cx = classNames.bind(styles);

interface Props {
  item: Item;
}

export default function ItemContents({ item }: Props) {
  return (
    <div className={cx(styles.container)}>
      <table className={cx(styles.table)}>
        <tbody>
          <tr className={cx(styles.table_row)}>
            <th className={cx(styles.table_head)}>품명</th>
            <td>{item.name}</td>
          </tr>
          <tr className={cx(styles.table_row)}>
            <th className={cx(styles.table_head)}>출신</th>
            <td>{item.native}</td>
          </tr>
          <tr className={cx(styles.table_row)}>
            <th className={cx(styles.table_head)}>구분</th>
            <td>{item.divide}</td>
          </tr>
          <tr className={cx(styles.table_row)}>
            <th className={cx(styles.table_head)}>단위</th>
            <td>{item.unit}</td>
          </tr>
          <tr className={cx(styles.table_row)}>
            <th className={cx(styles.table_head)}>단가</th>
            <td>{unitOfAccount(item.price, '원')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
