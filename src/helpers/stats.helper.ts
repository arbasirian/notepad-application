import moment, { DurationInputArg2, Moment } from 'moment';
import { GistModel, TimeBucketModel } from 'types';
const DATE_FORMAT = 'HH:mm:ss';

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
  const buckets: TimeBucketModel[] = [];
  for (let i = 0; i < qty; i++) {
    let newTime = moment(time).subtract(term * i, termType);
    buckets.unshift({ time: newTime, second: newTime.valueOf() });
  }

  return buckets;
};

const gitsItemsPerTime = (
  gists: GistModel[],
  times: TimeBucketModel[],
  timeType: DurationInputArg2
): number[] => {
  const chartDetails: number[] = [];
  if (!gists || gists?.length < 1) return new Array(times.length).fill(0);
  times.forEach((item, index) =>
    chartDetails.push(
      gists.filter((gist) =>
        filterItemsBaseTime(gist, item.time, times[index + 1]?.time, timeType)
      ).length
    )
  );
  return chartDetails;
};

const gitsFilesPerTime = (
  gists: GistModel[],
  times: TimeBucketModel[],
  timeType: DurationInputArg2
): number[] => {
  const chartDetails: number[] = [];

  if (!gists || gists?.length < 1) return new Array(times.length).fill(0);
  times.forEach((item, index) =>
    chartDetails.push(
      gists
        .filter((gist) =>
          filterItemsBaseTime(gist, item.time, times[index + 1]?.time, timeType)
        )
        .map((gist) => ({ ...gist.files })).length
    )
  );
  return chartDetails;
};

const filterItemsBaseTime = (
  gist: GistModel,
  current: Moment,
  next: Moment,
  timeType: DurationInputArg2
): boolean => {
  const createdAt: Moment = moment(gist.created_at);
  if (!next) return false;

  if (
    moment(createdAt, DATE_FORMAT).isBetween(
      moment(current, DATE_FORMAT),
      moment(next, DATE_FORMAT)
    )
  )
    return true;
  return false;
};

export default {
  cleanGistsList,
  createBucketList,
  gitsItemsPerTime,
  gitsFilesPerTime,
};
