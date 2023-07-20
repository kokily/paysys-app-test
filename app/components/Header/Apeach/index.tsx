import type { MouseEvent } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  onClick?: (e: MouseEvent) => void;
}

export default function Apeach({ onClick }: Props) {
  return (
    <div className={cx(styles.container)} onClick={onClick}>
      <div className={cx(styles.image_box)} />
      <MdArrowDropDown />
    </div>
  );
}
