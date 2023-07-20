'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useViewCart from './useViewCart';
import useRemoveCart from './useRemoveCart';
import Modal from '@/app/components/Modal';
import CartTop from './CartTop';
import CartTotal from './CartTotal';
import CartForm from './CartForm';

const cx = classNames.bind(styles);

export default function ViewCart() {
  const {
    cart,
    title,
    hall,
    etc,
    totalAmount,
    onChange,
    onAddBill,
    onRemoveOneCart,
    onRemoveCart,
  } = useViewCart();
  const { removeModal, onRemoveModalClick, onConfirm, onCancel } =
    useRemoveCart({ onRemoveCart });

  return (
    <div className={cx(styles.container)}>
      <CartTop cart={cart!} onRemoveOneCart={onRemoveOneCart} />
      <CartTotal totalAmount={totalAmount} />
      <CartForm
        title={title}
        hall={hall}
        etc={etc}
        onChange={onChange}
        onAddBill={onAddBill}
        onRemoveModalClick={onRemoveModalClick}
      />

      <Modal
        visible={removeModal}
        title="카드 삭제"
        content="정말 삭제하시나요?"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  );
}
