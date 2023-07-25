'use client';

import classNames from 'classnames';
import styles from './styles.module.scss';
import useListWeddings from './useListWeddings';
import WeddingSearch from './WeddingSearch';
import WeddingsTable from './WeddingsTable';

const cx = classNames.bind(styles);

export default function ListWeddings() {
  const { weddings, search, onChange, onSearch, onReadWedding, setTarget } =
    useListWeddings();

  return (
    <div className={cx(styles.container)}>
      <h2>웨딩 빌지 리스트</h2>

      <WeddingSearch search={search} onChange={onChange} onSearch={onSearch} />

      <WeddingsTable
        weddings={weddings}
        onReadWedding={onReadWedding}
        setTarget={setTarget}
      />
    </div>
  );
}
