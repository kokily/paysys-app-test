import type {
  Meal,
  Prepayment,
  Present,
  Reserve,
  Wedding,
} from '@prisma/client';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Vacuity from './Vacuity';
import WeddingMeal from './Meal';
import WeddingPresent from './Present';
import WeddingReserve from './Reserve';
import WeddingPrepayment from './Prepayment';

const cx = classNames.bind(styles);

interface Props {
  wedding: Wedding;
  meal: Meal;
  present: Present;
  reserve: Reserve;
  prepayment: Prepayment;
}

export default function Second({ ...rest }: Props) {
  return (
    <table className={cx(styles.container)}>
      <tbody>
        <WeddingMeal meal={rest.meal} />
        <Vacuity />

        <WeddingPresent present={rest.present} />
        <Vacuity />

        <WeddingReserve reserve={rest.reserve} />
        <Vacuity />

        <WeddingPrepayment prepayment={rest.prepayment} />
      </tbody>
    </table>
  );
}
