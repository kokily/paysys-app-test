'use client';

import type { ChangeEvent, SyntheticEvent } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

interface Props {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: SyntheticEvent) => void;
}

export default function WeddingSearch({ search, onChange, onSearch }: Props) {
  return (
    <form onSubmit={onSearch}>
      <div className={cx(styles.container)}>
        <input
          className={cx(styles.input)}
          type="text"
          name="search"
          value={search}
          onChange={onChange}
          placeholder="웨딩일자"
        />

        <Button color="menu" onClick={onSearch}>
          검색
        </Button>

        <Link href="/expense">
          <button className={cx(styles.anchor)}>웨딩추가</button>
        </Link>
      </div>
    </form>
  );
}
