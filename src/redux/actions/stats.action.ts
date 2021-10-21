import {
  LoadAllStatsParamsModel,
  StatsFilterModel,
  TimeBucketModel,
} from 'types';
import ActionTypes from '../actionTypes';

export function loadAll(params: LoadAllStatsParamsModel) {
  return {
    type: ActionTypes.LOAD_ALL_STATS,
    params,
  };
}
export function loadMore(params: LoadAllStatsParamsModel) {
  return {
    type: ActionTypes.LOAD_MORE_STATS,
    params,
  };
}
export function addTimeBuckets(data: TimeBucketModel[]) {
  return {
    type: ActionTypes.ADD_TIME_BUCKETS,
    data,
  };
}
export function upadteStatsFilter(data: StatsFilterModel) {
  return {
    type: ActionTypes.UPDATE_STATS_FILTERS,
    data,
  };
}
