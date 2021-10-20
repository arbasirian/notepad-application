import { createSelector } from 'reselect';
import { RootState, StatsStateModel } from 'types';

const selectStats = (state: RootState) => state.stats;

export const all = createSelector(
  [selectStats],
  (main: StatsStateModel) => main?.all
);
