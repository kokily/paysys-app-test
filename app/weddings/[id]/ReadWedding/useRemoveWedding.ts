import { useState } from 'react';

interface Props {
  onRemoveWedding: () => void;
}

export default function useRemoveWeedding({ onRemoveWedding }: Props) {
  const [removeModal, setRemoveModal] = useState(false);

  const onRemoveModalClick = () => {
    setRemoveModal(true);
  };

  const onConfirm = () => {
    onRemoveWedding();
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
