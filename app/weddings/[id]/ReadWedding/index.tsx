'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useReadWedding from './useReadWedding';
import useRemoveWeedding from './useRemoveWedding';
import useHusbandSign from './useHusbandSign';
import useBrideSign from './useBrideSign';
import Modal from '@/app/components/Modal';
import WeddingTitle from './WeddingTitle';
import WeddingButtons from './WeddingButtons';
import WeddingResult from './WeddingResult';
import First from './WeddingContents/First';
import Second from './WeddingContents/Second';

const cx = classNames.bind(styles);

export default function ReadWedding() {
  const {
    wedding,
    onBack,
    onUpdateExpensePage,
    onRemoveSign,
    onRemoveWedding,
    isAdmin,
  } = useReadWedding();
  const { removeModal, onRemoveModalClick, onConfirm, onCancel } =
    useRemoveWeedding({ onRemoveWedding });
  const { husbandView, onConfirmHusband, onCancelHusband } = useHusbandSign();
  const { brideView, onConfirmBride, onCancelBride } = useBrideSign();

  return (
    <div className={cx(styles.container)}>
      {wedding && (
        <>
          <WeddingTitle
            wedding={wedding}
            onRemoveSign={onRemoveSign}
            husbandView={husbandView}
            onConfirmHusband={onConfirmHusband}
            onCancelHusband={onCancelHusband}
            brideView={brideView}
            onConfirmBride={onConfirmBride}
            onCancelBride={onCancelBride}
          />

          <div className={cx(styles.contents)}>
            <First
              wedding={wedding.wedding}
              convention={wedding.convention}
              company={wedding.company}
            />
            <Second
              wedding={wedding.wedding}
              meal={wedding.meal}
              present={wedding.present}
              reserve={wedding.reserve}
              prepayment={wedding.prepayment}
            />
          </div>

          <div className={cx(styles.contents)}>
            <WeddingResult
              wedding={wedding.wedding}
              meal={wedding.meal}
              present={wedding.present}
              prepayment={wedding.prepayment}
            />
          </div>

          <WeddingButtons
            onBack={onBack}
            onRemoveClick={onRemoveModalClick}
            onUpdateExpensePage={onUpdateExpensePage}
          />

          <Modal
            visible={removeModal}
            title="웨딩 빌지"
            content="정말 삭제하시나요?"
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        </>
      )}
    </div>
  );
}
