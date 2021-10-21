import ActionTypes from '../actionTypes';

import { StatsStateModel } from 'types';
import { reducerItemInitialState } from 'redux/reducers.constants';
import { isArray } from 'lodash';
import moment from 'moment';

export const initialState: StatsStateModel = {
  all: reducerItemInitialState,
  time_buckets: [],
  filter_info: {
    date: moment(),
    chart_qty: 8,
    per_page: 50,
    terms_type: 'second',
    terms_length: 5,
  },
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
          data:
            state?.all?.data?.data && isArray(state.all.data.data)
              ? [...state.all.data.data, ...action.data]
              : action.data,
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

    // ADD_TIME_BUCKETS
    case ActionTypes.ADD_TIME_BUCKETS:
      console.log(`action.data`, action.data);
      return {
        ...state,
        time_buckets: action.data,
      };
    // UPDATE_STATS_FILTERS
    case ActionTypes.UPDATE_STATS_FILTERS:
      console.log(`action.data`, action.data);
      return {
        ...state,
        filter_info: action.data,
      };

    default:
      return state;
  }
}
