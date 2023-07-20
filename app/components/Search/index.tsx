import type { ChangeEvent, SyntheticEvent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface Props {
  mode: string;
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: SyntheticEvent) => void;
}

export default function Search({ ...rest }: Props) {
  return (
    <form className={cx(styles.container)} onSubmit={rest.onSearch}>
      <div className={cx(styles.contents)}>
        <input
          className={cx(styles.input)}
          type="text"
          name="search"
          value={rest.search}
          onChange={rest.onChange}
          placeholder={`${rest.mode}`}
        />

        <button type="submit" className={cx(styles.button)}>
          검색
        </button>
      </div>
    </form>
  );
}
