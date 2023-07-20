'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useListMenu from './useListMenu';
import Button from '@/app/components/Button';
import MenuItem from './MenuItem';
import Skelton from '@/app/components/Skelton';

const cx = classNames.bind(styles);

export default function ListMenu() {
  const { menu, onBack, onReadMenu } = useListMenu();

  return (
    <div className={cx(styles.container)}>
      {menu && (
        <>
          <div className={cx(styles.title)}>
            <h2>{menu[0] && menu[0].divide}</h2>
            <Button color="cancel" onClick={onBack}>
              뒤 로
            </Button>
          </div>

          <div className={cx(styles.list_menu)}>
            {menu.map((item) => (
              <MenuItem key={item.id} item={item} onReadMenu={onReadMenu} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
