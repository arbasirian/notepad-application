import ActionTypes from '../actionTypes';

import { MainState } from 'types';
import { reducerItemInitialState } from 'redux/reducers.constants';

export const initialState: MainState = {
  sideMenu: false,
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDE_MENU:
      return {
        ...state,
        sideMenu: action.payload,
      };

    default:
      return state;
  }
}
