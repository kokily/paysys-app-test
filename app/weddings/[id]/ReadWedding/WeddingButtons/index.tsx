import classNames from 'classnames';
import styles from './styles.module.scss';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

interface Props {
  onBack: () => void;
  onUpdateExpensePage: () => void;
  onRemoveClick: () => void;
}

export default function WeddingButtons({ ...rest }: Props) {
  const { onBack, onUpdateExpensePage, onRemoveClick } = rest;

  return (
    <div className={cx(styles.container)}>
      <Button color="menu" onClick={onBack}>
        목록
      </Button>
      <Button color="edit" onClick={onUpdateExpensePage}>
        수정
      </Button>
      <Button color="remove" onClick={onRemoveClick}>
        삭제
      </Button>
    </div>
  );
}
