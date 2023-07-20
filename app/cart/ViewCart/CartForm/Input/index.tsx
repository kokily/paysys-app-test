'use client';

import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  name: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function Input({ ...rest }: Props) {
  return (
    <div className={cx(styles.container)}>
      <input
        className={cx(styles.input)}
        type="text"
        name={rest.name}
        value={rest.value}
        onChange={rest.onChange}
        required
      />
      <span className={cx(styles.bar)} />
      <label htmlFor={rest.name} className={cx(styles.label)}>
        {rest.label} {rest.required && <small>*필수</small>}
      </label>
    </div>
  );
}
