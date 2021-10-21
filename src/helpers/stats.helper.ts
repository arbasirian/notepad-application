import moment, { DurationInputArg2, Moment } from 'moment';
import { GistModel, TimeBucketModel } from 'types';

/**
 *  Factory function that return list of unique gist items
 * @param {GistModel[]} state - list of stored gists
 * @param {GistModel[]} new_items - new gists
 * @returns {GistModel[]}
 */
const cleanGistsList = (
  state: GistModel[],
  new_items: GistModel[]
): GistModel[] => {
  return new_items.filter(
    (item) => !state.find((stateItem) => stateItem.id === item.id)
  );
};

/**
 * Factory function that return list of time for showing data in chart
 * @param {Moment} time - Filterds time
 * @param {number} qty - step of time
 * @param {number} term - length of each step
 * @param {DurationInputArg2} termType - type of length
 * @returns
 */
const createBucketList = (
  time: Moment,
  qty: number,
  term: number,
  termType: DurationInputArg2
): TimeBucketModel[] => {
  const buckets: TimeBucketModel[] = [{ time, second: moment().valueOf() }];
  if (qty < 2) return buckets;
  for (let i = 1; i < qty; i++) {
    let newTime = moment().subtract(term * i, termType);
    buckets.unshift({ time: newTime, second: newTime.valueOf() });
  }

  return buckets;
};

export default {
  cleanGistsList,
  createBucketList,
};
