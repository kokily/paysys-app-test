import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { unitOfAccount } from '@/libs/utils';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  husbandName: string;
  husbandValue: string;
  brideName: string;
  brideValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  unit: string;
}

export default function TableInput({ ...rest }: Props) {
  return (
    <tr>
      <th>{rest.title}</th>
      <td>
        <input
          type="number"
          className={cx(styles.table_input)}
          name={rest.husbandName}
          value={rest.husbandValue}
          onChange={rest.onChange}
        />
      </td>
      <td>
        <input
          type="number"
          className={cx(styles.table_input)}
          name={rest.brideName}
          value={rest.brideValue}
          onChange={rest.onChange}
        />
      </td>
      <td>
        {unitOfAccount(
          parseInt(rest.husbandValue) + parseInt(rest.brideValue),
          rest.unit
        )}
      </td>
    </tr>
  );
}
