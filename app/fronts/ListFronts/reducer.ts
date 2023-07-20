import type { Dispatch } from 'react';

export function reducer(state: ListFrontsState, action: ActionPayload) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export const initialState: ListFrontsState = {
  search: '',
  hall: '',
  userId: '',
};

export function setInitialState(dispatch: Dispatch<ActionPayload>) {
  dispatch({ name: 'search', value: initialState.search });
  dispatch({ name: 'hall', value: initialState.hall });
  dispatch({ name: 'userId', value: initialState.userId });
}
