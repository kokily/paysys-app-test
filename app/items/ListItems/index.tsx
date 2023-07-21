'use client';

import Link from 'next/link';
import classNames from 'classnames';
import styles from './styles.module.scss';
import useListItems from './useListItems';
import Button from '@/app/components/Button';
import Search from '@/app/components/Search';
import ItemsTable from './ItemsTable';

const cx = classNames.bind(styles);

export default function ListItems() {
  const { items, search, onChange, onSearch, onReadItem, setTarget } =
    useListItems();

  return (
    <div className={cx(styles.container)}>
      <Search
        mode="품명"
        search={search}
        onChange={onChange}
        onSearch={onSearch}
      />

      <Link href="/items/add">
        <Button color="submit">품목 추가</Button>
      </Link>

      <ItemsTable items={items} onReadItem={onReadItem} />
    </div>
  );
}
