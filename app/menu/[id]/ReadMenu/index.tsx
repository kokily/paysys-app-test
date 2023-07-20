'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useReadMenu from './useReadMenu';
import MenuTable from './MenuTable';
import MenuInput from './MenuInput';
import MenuButtons from './MenuButtons';

const cx = classNames.bind(styles);

export default function ReadMenu() {
  const { menu, count, price, onBack, onChange, onAddCart } = useReadMenu();

  return menu ? (
    <div className={cx(styles.container)}>
      <div className={cx(styles.logo)}>
        <b>
          {menu.divide} | {menu.native}
        </b>
      </div>

      <div className={cx(styles.contents)}>
        <MenuTable menu={menu} price={price} onChange={onChange} />

        <hr />

        <MenuInput
          menu={menu}
          price={price}
          count={count}
          onChange={onChange}
        />

        <MenuButtons onAddCart={onAddCart} onBack={onBack} />
      </div>
    </div>
  ) : null;
}
