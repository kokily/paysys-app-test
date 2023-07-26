import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  data: {
    value: string;
    title: string;
  }[];
}

export default function TableSelect({ ...rest }: Props) {
  return (
    <tr>
      <th>{rest.title}</th>
      <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
        <select
          className={cx(styles.table_select)}
          name={rest.name}
          value={rest.value}
          onChange={rest.onChange}
        >
          {rest.data.map((item) => (
            <option key={item.title} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
}
