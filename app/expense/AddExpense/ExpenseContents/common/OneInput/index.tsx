import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function OneInput({ ...rest }: Props) {
  const { title, name, value, onChange } = rest;

  return (
    <tr>
      <th>{title}</th>
      <td colSpan={3}>
        <input
          type="number"
          className={cx(styles.one_input, styles.name)}
          name={name}
          value={value}
          onChange={onChange}
          style={{ textAlign: 'center' }}
        />
      </td>
    </tr>
  );
}
