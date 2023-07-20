import classNames from 'classnames';
import styles from './styles.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

interface Props {
  visible: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Modal({ ...rest }: Props) {
  if (!rest.visible) return null;

  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.contents)}>
        <h2>{rest.title}</h2>
        <p>{rest.content}</p>

        <div className={cx(styles.buttons_box)}>
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
