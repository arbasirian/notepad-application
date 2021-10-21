import { single, promise } from './lib';

export default [
  // Single Actions

  single('TOGGLE_SIDE_MENU'),

  /**
   * Promise Actions -> Second arguments guide
   * c: CREATE
   * l: LOAD
   * a: LOAD_ALL
   * u: UPDATE
   * d: DELETE
   */

  promise('STATS', 'a'),
  promise('LOAD_MORE_STATS'),
  promise('ADD_TIME_BUCKETS'),
  promise('UPDATE_STATS_FILTERS'),
];
