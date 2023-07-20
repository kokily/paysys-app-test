import { useAtomValue } from 'jotai';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { setMenu } from '@/libs/atom';
import Logo from './Logo';
import Apeach from './Apeach';
import Navigation from './Navigation';
import useHeader from './useHeader';

const cx = classNames.bind(styles);

export default function Header() {
  const { pathname, apeachRef, onToggleMenu, onOutsideClick, onLogout, user } =
    useHeader();
  const menuOpen = useAtomValue(setMenu);

  return (
    <header className={cx(styles.header)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.contents)}>
          <Logo pathname={pathname} />

          <div className={cx(styles.spacer)} />

          <>
            <div ref={apeachRef}>
              <Apeach onClick={onToggleMenu} />
            </div>

            {user && menuOpen && (
              <Navigation
                isAdmin={user.admin!}
                onClose={onOutsideClick}
                onLogout={onLogout}
              />
            )}
          </>
        </div>
      </div>
    </header>
  );
}
