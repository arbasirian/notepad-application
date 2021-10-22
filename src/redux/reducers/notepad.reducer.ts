import ActionTypes from '../actionTypes';

import { NotepadStateModel } from 'types';
import { reducerItemInitialState } from 'redux/reducers.constants';

export const initialState: NotepadStateModel = {
  detail: reducerItemInitialState,
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    // LOAD_NOTEPAD
    case ActionTypes.LOAD_NOTEPAD:
      return {
        ...state,
        detail: {
          fetching: true,
        },
      };
    case ActionTypes.LOAD_NOTEPAD_SUCCESS:
      return {
        ...state,
        detail: {
          data: action.data,
          fetching: false,
        },
      };
    case ActionTypes.LOAD_NOTEPAD_FAILURE:
      return {
        ...state,
        detail: {
          error: action.error,
          fetching: false,
        },
      };

    // CLEAR_NOTEPAD
    case ActionTypes.CLEAR_NOTEPAD:
      return {
        ...state,
        detail: {
          fetching: false,
        },
      };

    default:
      return state;
  }
}
