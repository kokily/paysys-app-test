'use client';

import type { Cart } from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

interface Props {
  cart: Cart;
  onRemoveOneCart: (itemId: string, itemName: string) => void;
}

export default function CartTop({ cart, onRemoveOneCart }: Props) {
  return (
    <>
      <h2>전표 확인(종합)</h2>

      <table className={cx(styles.container)}>
        <thead>
          <tr>
            <th className={cx(styles.table_head)}>적용</th>
            <th className={cx(styles.table_head)}>수량</th>
            <th className={cx(styles.table_head)}>단가</th>
            <th className={cx(styles.table_head)}>삭제</th>
          </tr>
        </thead>

        <tbody>
          {cart?.items ? (
            cart.items.map((item: any) => (
              <tr key={item.id}>
                <td className={cx(styles.table_data)}>
                  [ {item.native} ]<br />
                  {item.divide}
                </td>
                <td className={cx(styles.table_data)}>
                  {unitOfAccount(item.count, item.unit)}
                </td>
                <td className={cx(styles.table_data)}>
                  {unitOfAccount(item.price, '원')} /<br />
                  <strong>{unitOfAccount(item.amount, '원')}</strong>
                </td>
                <td className={cx(styles.table_data)}>
                  <Button
                    color="remove"
                    onClick={() => onRemoveOneCart(item.id, item.name)}
                  >
                    삭제
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className={cx(styles.table_data)} colSpan={4}>
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
