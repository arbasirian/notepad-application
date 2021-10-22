import { promise } from './lib';

export default [
  /**
   * Promise Actions -> Second arguments guide
   * c: CREATE
   * l: LOAD
   * a: LOAD_ALL
   * u: UPDATE
   * d: DELETE
   */

  // NOTEPAD
  promise('NOTEPAD', 'lucd'),
  promise('CLEAR_NOTEPAD'),

  // STATS
  promise('STATS', 'a'),
  promise('STATS_FILES', 'a'),
  promise('LOAD_MORE_STATS'),
  promise('LOAD_MORE_STATS_FILES'),
  promise('ADD_TIME_BUCKETS'),
  promise('UPDATE_STATS_FILTERS'),
];
