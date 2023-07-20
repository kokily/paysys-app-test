import type { Item } from '@prisma/client';
import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';

const cx = classNames.bind(styles);

interface Props {
  menu: Item;
  price: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function MenuTable({ menu, price, onChange }: Props) {
  return (
    <table className={cx(styles.table)}>
      <tbody>
        <tr>
          <th>구 분</th>
          <td>{menu.name}</td>
        </tr>

        <tr>
          <th>단 가</th>
          <td>
            {menu.price === 0 ? (
              <input
                type="number"
                name="price"
                value={price}
                onChange={onChange}
              />
            ) : (
              <>{unitOfAccount(menu.price, '원')}</>
            )}
          </td>
        </tr>

        <tr>
          <th>단 위</th>
          <td>{menu.unit}</td>
        </tr>
      </tbody>
    </table>
  );
}
