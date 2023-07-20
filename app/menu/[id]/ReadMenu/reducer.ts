import type { Dispatch } from 'react';

export function reducer(state: ItemState, action: ActionPayload) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export const initialState: ItemState = {
  count: 0,
  price: 0,
};

export function setInitialState(dispatch: Dispatch<ActionPayload>) {
  dispatch({ name: 'count', value: 0 });
  dispatch({ name: 'price', value: 0 });
}
