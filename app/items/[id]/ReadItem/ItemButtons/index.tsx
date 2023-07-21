import classNames from 'classnames';
import styles from './styles.module.scss';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

interface Props {
  onBack: () => void;
  onUpdateItemPage: () => void;
  onModalOpen: () => void;
}

export default function ItemButtons({ ...rest }: Props) {
  return (
    <div className={cx(styles.container)}>
      <Button color="submit" onClick={rest.onBack}>
        목록
      </Button>
      <Button color="edit" onClick={rest.onUpdateItemPage}>
        수정
      </Button>
      <Button color="remove" onClick={rest.onModalOpen}>
        삭제
      </Button>
    </div>
  );
}
