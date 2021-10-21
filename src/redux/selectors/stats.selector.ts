import { createSelector } from 'reselect';
import { RootState, StatsStateModel } from 'types';

const selectStats = (state: RootState) => state.stats;

export const all = createSelector(
  [selectStats],
  (main: StatsStateModel) => main?.all
);

export const buckets = createSelector(
  [selectStats],
  (main: StatsStateModel) => main?.time_buckets
);
export const filterInfo = createSelector(
  [selectStats],
  (main: StatsStateModel) => main?.filter_info
);
