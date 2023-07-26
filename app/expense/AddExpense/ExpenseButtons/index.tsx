import type { SyntheticEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

interface Props {
  onBack: () => void;
  onSubmit: (e: SyntheticEvent) => void;
}

export default function ExpenseButtons({ onBack, onSubmit }: Props) {
  return (
    <div className={cx(styles.container)}>
      <Button color="cancel" onClick={onBack}>
        취소하기
      </Button>
      <Button color="submit" onClick={onSubmit}>
        저장하기
      </Button>
    </div>
  );
}
