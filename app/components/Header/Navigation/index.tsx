import { useAtomValue } from 'jotai';
import classNames from 'classnames';
import styles from './styles.module.scss';
import NavItem from './NavItem';
import { setMenu } from '@/libs/atom';

const cx = classNames.bind(styles);

interface Props {
  isAdmin: boolean;
  onClose: (e: any) => void;
  onLogout: () => void;
}

export default function Navigation({ isAdmin, onClose, onLogout }: Props) {
  const visible = useAtomValue(setMenu);
  const Split = () => <div className={cx(styles.split)} />;

  return (
    <div
      className={cx(styles.container, styles[visible ? 'visible' : 'hidden'])}
    >
      <div className={cx(styles.contents)}>
        <NavItem href="/password">비밀번호 변경</NavItem>

        {isAdmin && (
          <>
            <Split />

            <NavItem href="/weddings">웨딩빌지</NavItem>
            <NavItem href="/items">품목 리스트</NavItem>

            <Split />

            <NavItem href="/users">사용자 목록</NavItem>
          </>
        )}

        <Split />

        <NavItem onClick={onLogout}>로그아웃</NavItem>
      </div>
    </div>
  );
}
