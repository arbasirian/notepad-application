import ActionTypes from '../actionTypes';

import { StatsStateModel } from 'types';
import { reducerItemInitialState } from 'redux/reducers.constants';

export const initialState: StatsStateModel = {
  all: reducerItemInitialState,
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    // LOAD_ALL_STATS
    case ActionTypes.LOAD_ALL_STATS:
      return {
        ...state,
        all: {
          ...state.all,
          fetching: true,
        },
      };
    case ActionTypes.LOAD_ALL_STATS_SUCCESS:
      return {
        ...state,
        all: {
          data: [...state.all.data, ...action.data],
          fetching: false,
        },
      };
    case ActionTypes.LOAD_ALL_STATS_FAILURE:
      return {
        ...state,
        all: {
          ...state.all.data,
          error: action.error,
          fetching: false,
        },
      };

    default:
      return state;
  }
}
