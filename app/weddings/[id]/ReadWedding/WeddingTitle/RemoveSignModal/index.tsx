import Image from 'next/image';
import classNames from 'classnames';
import styles from './styles.module.scss';
import useRemoveSign from './useRemoveSign';
import Modal from '@/app/components/Modal';

const cx = classNames.bind(styles);

interface Props {
  husbandImage?: string;
  brideImage?: string;
  onRemoveSign: () => void;
}

export default function RemoveSignModal({ ...rest }: Props) {
  const { husbandImage, brideImage, onRemoveSign } = rest;
  const { removeSign, onRemoveModalClick, onConfirm, onCancel } = useRemoveSign(
    { onRemoveSign }
  );

  return (
    <>
      <div className={cx(styles.container)} onClick={onRemoveModalClick}>
        <div className={cx(styles.sign_box)}>
          <label>신랑님 서명</label>
          {husbandImage && (
            <Image src={husbandImage} width={160} height={60} alt="" />
          )}
        </div>

        <div className={cx(styles.sign_box)}>
          <label>신부님 서명</label>
          {brideImage && (
            <Image src={brideImage} width={160} height={60} alt="" />
          )}
        </div>
      </div>

      <Modal
        visible={removeSign}
        title="서명 삭제"
        content="확인을 누르시면 삭제됩니다."
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
}
