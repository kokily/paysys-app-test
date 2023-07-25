import { useState } from 'react';

interface Props {
  onRemoveUser: () => void;
}

export default function useRemoveUser({ onRemoveUser }: Props) {
  const [removeModal, setRemoveModal] = useState(false);

  const onRemoveModalClick = () => {
    setRemoveModal(true);
  };

  const onConfirm = () => {
    setRemoveModal(false);
    onRemoveUser();
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
