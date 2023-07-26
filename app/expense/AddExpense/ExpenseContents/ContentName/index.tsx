import classNames from 'classnames';
import styles from './styles.module.scss';
import OneInput from '../common/OneInput';

const cx = classNames.bind(styles);

interface Props {
  expense: AddExpensePayload;
}

export default function ContentName({ expense }: Props) {
  return (
    <div className={cx(styles.container)}>
      <strong>
        <OneInput
          title="신랑님"
          name="husbandName"
          value={expense.husbandName}
          onChange={expense.onChange}
        />
      </strong>

      <strong>
        <OneInput
          title="신부님"
          name="brideName"
          value={expense.brideName}
          onChange={expense.onChange}
        />
      </strong>
    </div>
  );
}
