import type { Dispatch } from 'react';

export function reducer(state: AuthState, action: ActionPayload) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export const initialState: AuthState = {
  username: '',
  password: '',
};

export function setInitialState(dispatch: Dispatch<ActionPayload>) {
  dispatch({ name: 'username', value: '' });
  dispatch({ name: 'password', value: '' });
}
