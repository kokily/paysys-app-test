import { useState } from 'react';

interface Props {
  onRemoveCart: () => void;
}

export default function useRemoveCart({ onRemoveCart }: Props) {
  const [removeModal, setRemoveModal] = useState(false);

  const onRemoveModalClick = () => {
    setRemoveModal(true);
  };

  const onConfirm = () => {
    onRemoveCart();
    setRemoveModal(false);
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
