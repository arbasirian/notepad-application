import { LoadAllStatsParamsModel } from 'types';
import ActionTypes from '../actionTypes';

export function loadAll(params: LoadAllStatsParamsModel) {
  return {
    type: ActionTypes.LOAD_ALL_STATS,
    params,
  };
}
