'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useAddItem from './useAddItem';
import Button from '@/app/components/Button';
import ItemInput from './ItemInput';
import ItemSelect from './ItemSelect';
import { divideArray, nativeArray } from './reducer';

const cx = classNames.bind(styles);

export default function AddItem() {
  const {
    name,
    divide,
    native,
    unit,
    price,
    onBack,
    onChange,
    onAddItem,
    isEdit,
  } = useAddItem();

  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.logo)}>품목 등록</div>

      <form onSubmit={onAddItem}>
        <div className={cx(styles.form)}>
          <ItemInput
            name="name"
            value={name}
            onChange={onChange}
            label="품명"
            focus
          />

          <ItemSelect
            name="divide"
            value={divide}
            onChange={onChange}
            data={divideArray}
          />

          <ItemSelect
            name="native"
            value={native}
            onChange={onChange}
            data={nativeArray}
          />

          <ItemInput
            name="unit"
            value={unit}
            onChange={onChange}
            label="단위"
          />

          <ItemInput
            name="price"
            value={price.toString()}
            onChange={onChange}
            label="단가"
          />

          <div className={cx(styles.buttons_box)}>
            <Button color="submit" type="submit" fullsize={true}>
              {isEdit ? '저장하기' : '등록하기'}
            </Button>
            <Button color="cancel" fullsize onClick={onBack}>
              취소하기
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
