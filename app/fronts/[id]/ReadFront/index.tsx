'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useReadFront from './useReadFront';
import useRemoveFront from './useRemoveFront';
import Modal from '@/app/components/Modal';
import FrontHeader from './FrontHeader';
import FrontTotal from './FrontTotal';
import FrontButtons from './FrontButtons';
import FrontEtc from './FrontEtc';
import FrontTable from './FrontTable';

const cx = classNames.bind(styles);

export default function ReadFront() {
  const {
    front,
    onBack,
    onRestoreBill,
    onAddReservePage,
    onRemoveReserve,
    onRemoveFront,
    isAdmin,
    userId,
  } = useReadFront();
  const { removeModal, onRemoveModalClick, onConfirm, onCancel } =
    useRemoveFront({ onRemoveFront });

  return (
    <div className={cx(styles.container)}>
      {front && front.userId && (
        <div className={cx(styles.contents)}>
          <FrontHeader front={front} />
          <FrontTable front={front} />

          {front.etc !== '' && front.etc !== ' ' && (
            <FrontEtc etc={front.etc} />
          )}

          <hr />

          <FrontTotal front={front} />

          <FrontButtons
            front={front}
            onBack={onBack}
            onRestoreBill={onRestoreBill}
            onAddReservePage={onAddReservePage}
            onRemoveReserve={onRemoveReserve}
            onRemoveModalClick={onRemoveModalClick}
            userId={userId!}
            isAdmin={isAdmin!}
          />
        </div>
      )}

      <Modal
        visible={removeModal}
        title="빌지 삭제"
        content="정말 삭제하시나요?"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  );
}
