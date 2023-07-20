import type { Bill } from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Button from '@/app/components/Button';

const cx = classNames.bind(styles);

interface Props {
  front: Bill;
  onBack: () => void;
  onRestoreBill: () => void;
  onAddReservePage: () => void;
  onRemoveReserve: () => void;
  onRemoveModalClick: () => void;
  userId: string | null;
  isAdmin: boolean;
}

export default function FrontButtons({ ...rest }: Props) {
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.buttons_box)}>
        {rest.userId &&
          rest.front &&
          (rest.isAdmin || rest.front.userId === rest.userId) && (
            <>
              <Button color="remove" onClick={rest.onRemoveModalClick}>
                삭 제
              </Button>
              <Button color="restore" onClick={rest.onRestoreBill}>
                수 정
              </Button>
            </>
          )}

        <Button color="menu" onClick={rest.onBack}>
          목 록
        </Button>

        {rest.userId && rest.front && rest.isAdmin && (
          <>
            {!rest.front.reserve || rest.front.reserve === 0 ? (
              <Button color="reserve" onClick={rest.onAddReservePage}>
                + 예약금
              </Button>
            ) : (
              <Button color="reserve" onClick={rest.onRemoveReserve}>
                예약금 삭제
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
