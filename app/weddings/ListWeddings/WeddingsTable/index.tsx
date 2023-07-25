import type { Wedding } from '@prisma/client';
import type { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Skelton from '@/app/components/Skelton';

const cx = classNames.bind(styles);

interface Props {
  weddings: Array<Wedding>;
  onReadWedding: (id: string) => void;
  setTarget: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
}

export default function WeddingsTable({ ...rest }: Props) {
  return (
    <div className={cx(styles.container)}>
      <table className={cx(styles.table)}>
        <thead>
          <tr>
            <th className={cx(styles.table_head)}>웨딩일자</th>
            <th className={cx(styles.table_head)}>웨딩시간</th>
            <th className={cx(styles.table_head)}>신랑</th>
            <th className={cx(styles.table_head)}>신부</th>
          </tr>
        </thead>

        <tbody>
          {rest.weddings.length > 0 ? (
            rest.weddings.map((wedding) => (
              <tr key={wedding.id}>
                <td className={cx(styles.table_data)}>
                  <strong onClick={() => rest.onReadWedding(wedding.id)}>
                    {wedding.weddingAt.toString()}
                  </strong>
                </td>
                <td className={cx(styles.table_data)}>{wedding.eventAt}</td>
                <td className={cx(styles.table_data)}>{wedding.husbandName}</td>
                <td className={cx(styles.table_data)}>{wedding.brideName}</td>
              </tr>
            ))
          ) : (
            <>
              {Array.from(Array(20), (_, i) => (
                <Skelton key={i} />
              ))}
            </>
          )}
        </tbody>
      </table>

      <div ref={rest.setTarget} />
    </div>
  );
}
