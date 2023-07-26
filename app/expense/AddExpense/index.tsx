'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useAddExpense from './useAddExpense';
import ExpenseButtons from './ExpenseButtons';
import ExpenseContents from './ExpenseContents';

const cx = classNames.bind(styles);

export default function AddExpense() {
  const expense = useAddExpense();

  return (
    <div className={cx(styles.container)}>
      <h2 className={cx(styles.title)}>웨딩 정산</h2>

      <ExpenseContents expense={expense} />

      <ExpenseButtons onBack={expense.onBack} onSubmit={expense.onAddExpense} />
    </div>
  );
}
