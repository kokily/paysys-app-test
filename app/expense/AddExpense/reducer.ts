import type { Dispatch } from 'react';

export default function reducer(state: ExpenseType, action: ActionPayload) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export const initialState: ExpenseType = {
  husbandName: '',
  brideName: '',
  weddingAt: new Date().toLocaleDateString(),
  eventAt: '',
  costHusband: 0,
  costBride: 0,
  mealHusband: 0,
  mealBride: 0,
  presentHusband: 0,
  presentBride: 0,
  reserveHusband: 0,
  reserveBride: 0,
  rentalHusband: 0,
  rentalBride: 0,
  swordHusband: 0,
  swordBride: 0,
  gloveHusband: 0,
  gloveBride: 0,
  bouquetHusband: 0,
  bouquetBride: 0,
  ceremonyHusband: 0,
  ceremonyBride: 0,
  companyHusband: 0,
  companyBride: 0,
  roofTopHusband: 0,
  roofTopBride: 0,
  ownerWomanHusband: 0,
  ownerWomanBride: 0,
  ownerManHusband: 0,
  ownerManBride: 0,
  selectHusband: 0,
  selectBride: 0,
  frameHusband: 0,
  frameBride: 0,
  dressHusband: 0,
  dressBride: 0,
  hairpinHusband: 0,
  hairpinBride: 0,
  wigHusband: 0,
  wigBride: 0,
  videoHusband: 0,
  videoBride: 0,
  etcHusband: 0,
  etcBride: 0,
  playHusband: 0,
  playBride: 0,
  anthemHusband: 0,
  anthemBride: 0,
  moderatorHusband: 0,
  moderatorBride: 0,
  officiateHusband: 0,
  officiateBride: 0,
  hanbokPreHusband: 0,
  hanbokPreBride: 0,
  hanbokPostHusband: 0,
  hanbokPostBride: 0,
  meals: 'privacy',
  mealsPrice: 0,
  mealsNumHusband: 0,
  mealsNumBride: 0,
  present: 'privacy',
  presentPrice: 0,
  presentNumHusband: 0,
  presentNumBride: 0,
  reserve: 'half',
  reservePay: 0,
  prePaymentHusband: 0,
  prePaymentBride: 0,
};

export function dispatchExpense(
  data: ReadWeddingResponse,
  dispatch: Dispatch<ActionPayload>
) {
  // Wedding
  dispatch({ name: 'husbandName', value: data.wedding.husbandName });
  dispatch({ name: 'brideName', value: data.wedding.brideName });
  dispatch({ name: 'eventAt', value: data.wedding.eventAt });
  dispatch({ name: 'costHusband', value: data.wedding.costHusband });
  dispatch({ name: 'costBride', value: data.wedding.costBride });
  dispatch({ name: 'mealHusband', value: data.wedding.mealHusband });
  dispatch({ name: 'mealBride', value: data.wedding.mealBride });
  dispatch({ name: 'presentHusband', value: data.wedding.presentHusband });
  dispatch({ name: 'presentBride', value: data.wedding.presentBride });
  dispatch({ name: 'reserveHusband', value: data.wedding.reserveHusband });
  dispatch({ name: 'reserveBride', value: data.wedding.reserveBride });

  // Convention
  dispatch({ name: 'rentalHusband', value: data.convention.rentalHusband });
  dispatch({ name: 'rentalBride', value: data.convention.rentalBride });
  dispatch({ name: 'swordHusband', value: data.convention.swordHusband });
  dispatch({ name: 'swordBride', value: data.convention.swordBride });
  dispatch({ name: 'gloveHusband', value: data.convention.gloveHusband });
  dispatch({ name: 'gloveBride', value: data.convention.gloveBride });
  dispatch({ name: 'bouquetHusband', value: data.convention.bouquetHusband });
  dispatch({ name: 'bouquetBride', value: data.convention.bouquetBride });
  dispatch({
    name: 'ceremonyHusband',
    value: data.convention.ceremonyHusband!,
  });
  dispatch({ name: 'ceremonyBride', value: data.convention.ceremonyBride! });

  // Company
  dispatch({ name: 'companyHusband', value: data.company.companyHusband });
  dispatch({ name: 'companyBride', value: data.company.companyBride });
  dispatch({ name: 'roofTopHusband', value: data.company.roofTopHusband });
  dispatch({ name: 'roofTopBride', value: data.company.roofTopBride });
  dispatch({
    name: 'ownerWomanHusband',
    value: data.company.ownerWomanHusband,
  });
  dispatch({ name: 'ownerWomanBride', value: data.company.ownerWomanBride });
  dispatch({ name: 'ownerManHusband', value: data.company.ownerManHusband });
  dispatch({ name: 'ownerManBride', value: data.company.ownerManBride });
  dispatch({ name: 'selectHusband', value: data.company.selectHusband });
  dispatch({ name: 'selectBride', value: data.company.selectBride });
  dispatch({ name: 'frameHusband', value: data.company.frameHusband });
  dispatch({ name: 'frameBride', value: data.company.frameBride });
  dispatch({ name: 'dressHusband', value: data.company.dressHusband });
  dispatch({ name: 'dressBride', value: data.company.dressBride });
  dispatch({ name: 'hairpinHusband', value: data.company.hairpinHusband });
  dispatch({ name: 'hairpinBride', value: data.company.hairpinBride });
  dispatch({ name: 'wigHusband', value: data.company.wigHusband });
  dispatch({ name: 'wigBride', value: data.company.wigBride });
  dispatch({ name: 'videoHusband', value: data.company.videoHusband });
  dispatch({ name: 'videoBride', value: data.company.videoBride });
  dispatch({ name: 'etcHusband', value: data.company.etcHusband });
  dispatch({ name: 'etcBride', value: data.company.etcBride });

  // Event
  dispatch({ name: 'playHusband', value: data.event.playHusband });
  dispatch({ name: 'playBride', value: data.event.playBride });
  dispatch({ name: 'anthemHusband', value: data.event.anthemHusband });
  dispatch({ name: 'anthemBride', value: data.event.anthemBride });
  dispatch({ name: 'moderatorHusband', value: data.event.moderatorHusband });
  dispatch({ name: 'moderatorBride', value: data.event.moderatorBride });
  dispatch({ name: 'officiateHusband', value: data.event.officiateHusband });
  dispatch({ name: 'officiateBride', value: data.event.officiateBride });

  // Hanbok
  dispatch({ name: 'hanbokPreHusband', value: data.hanbok.hanbokPreHusband });
  dispatch({ name: 'hanbokPreBride', value: data.hanbok.hanbokPreBride });
  dispatch({ name: 'hanbokPostHusband', value: data.hanbok.hanbokPostHusband });
  dispatch({ name: 'hanbokPostBride', value: data.hanbok.hanbokPostBride });

  // Meal
  dispatch({ name: 'meals', value: data.meal.meals });
  dispatch({ name: 'mealsPrice', value: data.meal.mealsPrice });
  dispatch({ name: 'mealsNumHusband', value: data.meal.mealsNumHusband });
  dispatch({ name: 'mealsNumBride', value: data.meal.mealsNumBride });

  // Present
  dispatch({ name: 'present', value: data.present.present });
  dispatch({ name: 'presentPrice', value: data.present.presentPrice });
  dispatch({
    name: 'presentNumHusband',
    value: data.present.presentNumHusband,
  });
  dispatch({ name: 'presentNumBride', value: data.present.presentNumBride });

  // Reserve
  dispatch({ name: 'reserve', value: data.reserve.reserve });
  dispatch({ name: 'reservePay', value: data.reserve.reservePay });

  // Prepayment
  dispatch({
    name: 'prePaymentHusband',
    value: data.prepayment.prePaymentHusband,
  });
  dispatch({ name: 'prePaymentBride', value: data.prepayment.prePaymentBride });
}
