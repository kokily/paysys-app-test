import type { Item } from '@prisma/client';
import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';

const cx = classNames.bind(styles);

interface Props {
  menu: Item;
  price: number;
  count: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function MenuInput({ ...rest }: Props) {
  return (
    <>
      <div>
        <label htmlFor="count">수 량</label>
        <input
          type="number"
          name="count"
          value={rest.count}
          onChange={rest.onChange}
          autoFocus
        />
      </div>

      <div className={cx(styles.total)}>
        <h3>
          합계 금액:{' '}
          {rest.menu.price === 0 ? (
            <>{unitOfAccount(rest.price * rest.count, '원')}</>
          ) : (
            <>{unitOfAccount(rest.menu.price * rest.count, '원')}</>
          )}
        </h3>
      </div>
    </>
  );
}
