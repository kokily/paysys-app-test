import { useState } from 'react';

interface Props {
  onRemoveSign: () => void;
}

export default function useRemoveSign({ onRemoveSign }: Props) {
  const [removeSign, setRemoveSign] = useState(false);

  const onRemoveModalClick = () => {
    setRemoveSign(true);
  };

  const onConfirm = () => {
    setRemoveSign(false);
    onRemoveSign();
  };

  const onCancel = () => {
    setRemoveSign(false);
  };

  return {
    removeSign,
    onRemoveModalClick,
    onConfirm,
    onCancel,
  };
}
