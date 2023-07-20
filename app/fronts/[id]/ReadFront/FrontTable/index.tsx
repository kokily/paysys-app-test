import type { Bill } from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';

const cx = classNames.bind(styles);

interface Props {
  front: Bill;
}

export default function FrontTable({ front }: Props) {
  return (
    <table className={cx(styles.container)}>
      <thead>
        <tr>
          <th>구분</th>
          <th>상품명</th>
          <th>단가</th>
          <th>수량</th>
          <th>소계</th>
        </tr>
      </thead>
      <tbody>
        {front.items === null || front.items.length === 0 ? (
          <tr>
            <td className={cx(styles.table_data)} colSpan={4}>
              데이터가 없습니다.
            </td>
          </tr>
        ) : (
          <>
            {front.items?.map((item: any) => (
              <tr key={item.id}>
                <td className={cx(styles.table_data, styles[item.native])}>
                  {item.native}
                </td>
                <td className={cx(styles.table_data, styles[item.native])}>
                  {item.name}
                </td>
                <td className={cx(styles.table_data, styles[item.native])}>
                  <span>{unitOfAccount(item.price, '원')}</span>
                </td>
                <td className={cx(styles.table_data, styles[item.native])}>
                  {item.count}
                </td>
                <td
                  className={cx(
                    styles.table_data,
                    styles[item.native],
                    'subTotal'
                  )}
                >
                  {unitOfAccount(item.price * item.count, '원')}
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}
