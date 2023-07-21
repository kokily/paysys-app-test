import { useState } from 'react';

interface Props {
  onRemoveItem: () => void;
}

export default function useRemoveItem({ onRemoveItem }: Props) {
  const [removeModal, setRemoveModal] = useState(false);

  const onRemoveModalClick = () => {
    setRemoveModal(true);
  };

  const onConfirm = () => {
    setRemoveModal(false);
    onRemoveItem();
  };

  const onCancel = () => {
    setRemoveModal(false);
  };

  return {
    removeModal,
    onRemoveModalClick,
    onConfirm,
    onCancel,
  };
}
