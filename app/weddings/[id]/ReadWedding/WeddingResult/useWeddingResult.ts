import type { Meal, Prepayment, Present, Wedding } from '@prisma/client';

interface Props {
  wedding: Wedding;
  meal: Meal;
  present: Present;
  prepayment: Prepayment;
}

export default function useWeddingResult({ ...rest }: Props) {
  let allCost = 0;
  let payment = 0;
  let husbandCost = 0;
  let brideCost = 0;

  if (rest.wedding && rest.meal && rest.present) {
    allCost =
      rest.wedding.costHusband +
      rest.wedding.costBride +
      rest.wedding.mealHusband +
      rest.wedding.mealBride +
      rest.wedding.presentHusband +
      rest.wedding.presentBride;

    payment =
      rest.wedding.costHusband +
      rest.wedding.costBride +
      rest.wedding.mealHusband +
      rest.wedding.mealBride +
      rest.wedding.presentHusband +
      rest.wedding.presentBride -
      rest.wedding.reserveHusband -
      rest.wedding.reserveBride -
      (rest.prepayment ? rest.prepayment.prePaymentHusband : 0) -
      (rest.prepayment ? rest.prepayment.prePaymentBride : 0);

    husbandCost =
      rest.wedding.costHusband +
      rest.wedding.mealHusband +
      rest.wedding.presentHusband -
      rest.wedding.reserveHusband -
      (rest.prepayment ? rest.prepayment.prePaymentHusband : 0);

    brideCost =
      rest.wedding.costBride +
      rest.wedding.mealBride +
      rest.wedding.presentBride -
      rest.wedding.reserveBride -
      (rest.prepayment ? rest.prepayment.prePaymentBride : 0);
  }

  return {
    allCost,
    payment,
    husbandCost,
    brideCost,
  };
}
