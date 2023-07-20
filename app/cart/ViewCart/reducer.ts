import type { Dispatch } from 'react';

export function reducer(state: CartState, action: ActionPayload) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export const initialState: CartState = {
  title: '',
  hall: '',
  etc: ' ',
  totalAmount: 0,
};

export function setInitialState(dispatch: Dispatch<ActionPayload>) {
  dispatch({ name: 'title', value: initialState.title });
  dispatch({ name: 'hall', value: initialState.hall });
  dispatch({ name: 'etc', value: initialState.etc });
  dispatch({ name: 'totalAmount', value: initialState.totalAmount });
}
