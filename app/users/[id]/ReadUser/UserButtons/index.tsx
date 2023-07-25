import classNames from 'classnames';
import styles from './styles.module.scss';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

interface Props {
  onBack: () => void;
  onSetIdentify: (select: IdentifyType) => void;
  onRemoveModalClick: () => void;
}

export default function UserButtons({ ...rest }: Props) {
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.contents)}>
        <Button color="menu" onClick={rest.onBack}>
          목록
        </Button>
        <Button color="remove" onClick={rest.onRemoveModalClick}>
          삭제
        </Button>
        <Button color="employee" onClick={() => rest.onSetIdentify('employee')}>
          강등
        </Button>
        <Button color="admin" onClick={() => rest.onSetIdentify('admin')}>
          승급
        </Button>
      </div>
    </div>
  );
}
