import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  focus?: boolean;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default function ItemInput({ ...rest }: Props) {
  return (
    <div className={cx(styles.container)}>
      {rest.focus ? (
        <input
          className={cx(styles.input)}
          type="text"
          name={rest.name}
          value={rest.value}
          onChange={rest.onChange}
          required
          autoFocus
        />
      ) : (
        <input
          className={cx(styles.input)}
          type="text"
          name={rest.name}
          value={rest.value}
          onChange={rest.onChange}
          required
        />
      )}
      <span className={cx(styles.bar)} />
      <label>{rest.label}</label>
    </div>
  );
}
