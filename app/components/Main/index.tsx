'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useMainMenu from './useMainMenu';
import MainItem from './MainItem';

const cx = classNames.bind(styles);

export default function Main() {
  const { menu, native, onMenu } = useMainMenu();

  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.content)}>
        <MainItem menu={menu} native={native} onMenu={onMenu} />
      </div>
    </div>
  );
}
