import classNames from 'classnames';
import styles from './styles.module.scss';
import SignCanvas from '@/app/components/SignCanvas';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

interface Props {
  visible: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function AddSignModal({ ...rest }: Props) {
  if (!rest.visible) return null;

  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.sign_box)}>
        <h2>{rest.title}</h2>

        <SignCanvas width={320} height={240} />

        <div className={cx(styles.buttons)}>
          <Button color="cancel" onClick={rest.onCancel}>
            취소
          </Button>
          <Button color="submit" onClick={rest.onConfirm}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
