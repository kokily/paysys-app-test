import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  data: string[];
}

export default function ItemSelect({ ...rest }: Props) {
  return (
    <div className={cx(styles.container)}>
      <select
        className={cx(styles.select)}
        name={rest.name}
        value={rest.value}
        onChange={rest.onChange}
      >
        {rest.data.map((divide, i) => (
          <option key={i} value={divide}>
            {divide}
          </option>
        ))}
      </select>
    </div>
  );
}
