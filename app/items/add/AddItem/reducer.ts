import type { Dispatch } from 'react';

export function reducer(state: AddItemPayload, action: ActionPayload) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export const initialState: AddItemPayload = {
  name: '',
  divide: '식사(뷔페)',
  native: '현역',
  unit: '',
  price: 0,
};

export function setInitialState(dispatch: Dispatch<ActionPayload>) {
  dispatch({ name: 'name', value: initialState.name });
  dispatch({ name: 'divide', value: initialState.divide });
  dispatch({ name: 'native', value: initialState.native });
  dispatch({ name: 'unit', value: initialState.unit });
  dispatch({ name: 'price', value: initialState.price });
}

export const divideArray = [
  '식사(뷔페)',
  '식사(중식)',
  '식사(양식)',
  '식사(한식)',
  '식사(수행)',
  '식사(다과)',
  '대관료',
  '레드와인',
  '화이트와인/샴페인',
  '주스/차',
  '민속주/고량주',
  '양주',
  '기타주류',
  '칵테일',
  '반입료',
  '부대비용',
];

export const nativeArray = ['현역', '예비역', '일반'];
