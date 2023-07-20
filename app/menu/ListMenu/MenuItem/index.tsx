import type { Item } from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';

const cx = classNames.bind(styles);

interface Props {
  item: Item;
  onReadMenu: (id: string) => void;
}

export default function MenuItem({ item, onReadMenu }: Props) {
  return (
    <div
      className={cx(styles.container, styles[item.native])}
      onClick={() => onReadMenu(item.id)}
    >
      {item.name} | {unitOfAccount(item.price, '원')}
    </div>
  );
}
