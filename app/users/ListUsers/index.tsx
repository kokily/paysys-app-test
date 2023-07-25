'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useListUsers from './useListUsers';
import Search from '@/app/components/Search';
import UsersTable from './UsersTable';

const cx = classNames.bind(styles);

export default function ListUsers() {
  const { users, search, onChange, onSearch, onReadUser, setTarget } =
    useListUsers();

  return (
    <div className={cx(styles.container)}>
      <Search
        mode="성명"
        search={search}
        onChange={onChange}
        onSearch={onSearch}
      />

      <UsersTable users={users} onReadUser={onReadUser} />

      <div ref={setTarget} />
    </div>
  );
}
