'use client';

import type { ChangeEvent, SyntheticEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Button from '@/app/components/Button';
import Input from './Input';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  hall: string;
  etc: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddBill: (e: SyntheticEvent) => void;
  onRemoveModalClick: () => void;
}

export default function CartForm({ ...rest }: Props) {
  return (
    <form className={cx(styles.form)}>
      <div className={cx(styles.center)}>
        <Input
          name="title"
          value={rest.title}
          onChange={rest.onChange}
          label="행사명"
          required
        />
        <Input
          name="hall"
          value={rest.hall}
          onChange={rest.onChange}
          label="행사장"
          required
        />
        <Input
          name="etc"
          value={rest.etc}
          onChange={rest.onChange}
          label="기 타"
        />

        <Button color="submit" onClick={rest.onAddBill}>
          전송하기
        </Button>
        <Button color="remove" onClick={rest.onRemoveModalClick}>
          전체삭제
        </Button>
      </div>
    </form>
  );
}
