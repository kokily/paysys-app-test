import { useState } from 'react';

interface Props {
  onRemoveFront: () => void;
}

export default function useRemoveFront({ onRemoveFront }: Props) {
  const [removeModal, setRemoveModal] = useState(false);

  const onRemoveModalClick = () => {
    setRemoveModal(true);
  };

  const onConfirm = () => {
    onRemoveFront();
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
