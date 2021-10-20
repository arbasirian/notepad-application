import { createSelector } from 'reselect';
import { MainState } from 'types';

const selectMain = (state: any) => state.main;

export const selectSideMenu = createSelector(
  [selectMain],
  (main: MainState) => main?.sideMenu
);
