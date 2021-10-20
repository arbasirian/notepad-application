import { LoadAllStatsParamsModel } from 'types';
import ActionTypes from '../actionTypes';

export function loadAll(params: LoadAllStatsParamsModel) {
  return {
    method: 'get',
    type: ActionTypes.LOAD_ALL_STATS,
    url: '/gists/public',
    params,
  };
}
