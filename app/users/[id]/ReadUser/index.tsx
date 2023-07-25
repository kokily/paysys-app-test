'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useReadUser from './useReadUser';
import useRemoveUser from './useRemoveUser';
import Modal from '@/app/components/Modal';
import UserButtons from './UserButtons';
import UserContent from './UserContents';
import UserContents from './UserContents';

const cx = classNames.bind(styles);

export default function ReadUser() {
  const { user, onBack, onRemoveUser, onSetIdentity } = useReadUser();
  const { removeModal, onRemoveModalClick, onConfirm, onCancel } =
    useRemoveUser({ onRemoveUser });

  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.contents)}>
        <h2>사용자 상세보기</h2>

        <div className={cx(styles.down_border)} />

        <UserButtons
          onBack={onBack}
          onRemoveModalClick={onRemoveModalClick}
          onSetIdentify={onSetIdentity}
        />

        {user && <UserContents user={user} />}
      </div>

      <Modal
        visible={removeModal}
        title="사용자 삭제"
        content="정말 삭제하시나요?"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  );
}
