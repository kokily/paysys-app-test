'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useReadItem from './useReadItem';
import useRemoveItem from './useRemoveItem';
import Modal from '@/app/components/Modal';
import ItemContents from './ItemContents';
import ItemButtons from './ItemButtons';

const cx = classNames.bind(styles);

export default function ReadItem() {
  const { item, onBack, onRemoveItem, onUpdateItemPage } = useReadItem();
  const { removeModal, onRemoveModalClick, onConfirm, onCancel } =
    useRemoveItem({ onRemoveItem });

  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.contents)}>
        <h3>품목 상세보기</h3>

        <div className={cx(styles.down_border)} />

        <ItemButtons
          onBack={onBack}
          onModalOpen={onRemoveModalClick}
          onUpdateItemPage={onUpdateItemPage}
        />

        <Modal
          visible={removeModal}
          title="품목 삭제"
          content="정말 삭제하시나요?"
          onConfirm={onConfirm}
          onCancel={onCancel}
        />

        {item && <ItemContents item={item} />}
      </div>
    </div>
  );
}
