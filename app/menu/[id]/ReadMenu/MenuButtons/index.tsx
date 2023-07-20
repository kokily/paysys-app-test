import type { SyntheticEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

interface Props {
  onBack: (e: SyntheticEvent) => void;
  onAddCart: (e: SyntheticEvent) => void;
}

export default function MenuButtons({ onBack, onAddCart }: Props) {
  return (
    <div className={cx(styles.container)}>
      <Button color="submit" onClick={onAddCart}>
        전송하기
      </Button>
      <Button color="cancel" onClick={onBack}>
        취소하기
      </Button>
    </div>
  );
}
