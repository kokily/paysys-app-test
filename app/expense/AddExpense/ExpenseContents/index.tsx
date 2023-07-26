import classNames from 'classnames';
import styles from './styles.module.scss';
import ContentName from './ContentName';
import ContentDate from './ContentDate';
import Convention from './ContentItem/Convention';
import Company from './ContentItem/Company';
import Meal from './ContentItem/Meal';
import Present from './ContentItem/Present';
import Reserve from './ContentItem/Reserve';
import Prepayment from './ContentItem/Prepayment';

const cx = classNames.bind(styles);

interface Props {
  expense: AddExpensePayload;
}

export default function ExpenseContents({ expense }: Props) {
  return (
    <div className={cx(styles.container)}>
      <ContentName expense={expense} />
      <ContentDate expense={expense} />

      <hr className={cx(styles.split)} />

      <Convention
        onChange={expense.onChange}
        rentalHusband={expense.rentalHusband}
        rentalBride={expense.rentalBride}
        swordHusband={expense.swordHusband}
        swordBride={expense.swordBride}
        gloveHusband={expense.gloveHusband}
        gloveBride={expense.gloveBride}
        bouquetHusband={expense.bouquetHusband}
        bouquetBride={expense.bouquetBride}
        ceremonyHusband={expense.ceremonyHusband}
        ceremonyBride={expense.ceremonyBride}
      />

      <Company
        onChange={expense.onChange}
        companyHusband={expense.companyHusband}
        companyBride={expense.companyBride}
        roofTopHusband={expense.roofTopHusband}
        roofTopBride={expense.roofTopBride}
        ownerWomanHusband={expense.ownerWomanHusband}
        ownerWomanBride={expense.ownerWomanBride}
        ownerManHusband={expense.ownerManHusband}
        ownerManBride={expense.ownerManBride}
        selectHusband={expense.selectHusband}
        selectBride={expense.selectBride}
        frameHusband={expense.frameHusband}
        frameBride={expense.frameBride}
        dressHusband={expense.dressHusband}
        dressBride={expense.dressBride}
        hairpinHusband={expense.hairpinHusband}
        hairpinBride={expense.hairpinBride}
        wigHusband={expense.wigHusband}
        wigBride={expense.wigBride}
        videoHusband={expense.videoHusband}
        videoBride={expense.videoBride}
        etcHusband={expense.etcHusband}
        etcBride={expense.etcBride}
      />

      <Meal
        onChange={expense.onChange}
        meals={expense.meals}
        mealsPrice={expense.mealsPrice}
        mealsNumHusband={expense.mealsNumHusband}
        mealsNumBride={expense.mealsNumBride}
      />

      <Present
        onChange={expense.onChange}
        present={expense.present}
        presentPrice={expense.presentPrice}
        presentNumHusband={expense.presentNumHusband}
        presentNumBride={expense.presentNumBride}
      />

      <Reserve
        onChange={expense.onChange}
        reserve={expense.reserve}
        reservePay={expense.reservePay}
      />

      <Prepayment
        onChange={expense.onChange}
        prePaymentHusband={expense.prePaymentHusband}
        prePaymentBride={expense.prePaymentBride}
      />
    </div>
  );
}
