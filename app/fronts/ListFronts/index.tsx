'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useListFronts from './useListFronts';
import Search from '@/app/components/Search';
import ListContents from './ListContents';

const cx = classNames.bind(styles);

export default function ListFronts() {
  const {
    fronts,
    search,
    onChange,
    onSearch,
    onHallList,
    onUserList,
    onReadFront,
    setTarget,
  } = useListFronts();

  return (
    <div className={cx(styles.container)}>
      <h2>프런트 전표 현황</h2>

      <Search
        mode="제목"
        search={search}
        onChange={onChange}
        onSearch={onSearch}
      />

      <ListContents
        fronts={fronts}
        onHallList={onHallList}
        onUserList={onUserList}
        onReadFront={onReadFront}
      />

      <div ref={setTarget} />
    </div>
  );
}
