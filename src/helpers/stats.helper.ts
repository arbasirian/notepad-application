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

/**
 * Funcation that return array of gists numbers for chart
 * @param {GistModel[]} gists - list of gist files
 * @param {TimeBucketModel[]} times - time steps
 * @param {DurationInputArg2} timeType - type of length
 * @returns {number[]}
 */
const gitsItemsPerTime = (
  gists: GistModel[],
  times: TimeBucketModel[],
  timeType: DurationInputArg2
): number[] => {
  const chartDetails: number[] = [];
  if (!gists || gists?.length < 1) return new Array(times.length).fill(0);
  const gistList = [...gists];

  times.forEach((item, index) =>
    chartDetails.push(
      gistList.filter((gist) =>
        filterItemsBaseTime(gist, item.time, times[index + 1]?.time, timeType)
      ).length
    )
  );
  return chartDetails;
};

/**
 * Funcation that return array of files numbers for chart
 * @param {GistModel[]} gists - list of gist files
 * @param {TimeBucketModel[]} times - time steps
 * @param {DurationInputArg2} timeType - type of length
 * @returns {number[]}
 */
const gitsFilesPerTime = (
  gists: GistModel[],
  times: TimeBucketModel[],
  timeType: DurationInputArg2
): number[] => {
  const chartDetails: number[] = [];
  if (!gists || gists?.length < 1) return new Array(times.length).fill(0);
  const gistList = [...gists];
  times.forEach((item, index) =>
    chartDetails.push(
      gistList
        .filter((gist) =>
          filterItemsBaseTime(gist, item.time, times[index + 1]?.time, timeType)
        )
        .map((gist) => ({ ...gist.files })).length
    )
  );
  return chartDetails;
};

/**
 * Function that check the gist date that is between to date
 * @param {GistModel} gist - gist file info
 * @param {Moment} current - current time
 * @param {Moment} next - next time
 * @param {DurationInputArg2} timeType - length type
 * @returns {boolean}
 */
const filterItemsBaseTime = (
  gist: GistModel,
  current: Moment,
  next: Moment,
  timeType: DurationInputArg2
): boolean => {
  if (!next) return true;
  const createdAt: Moment = moment(gist.created_at);

  const currentdDate = new Date(current.format());
  const createdAtDate = new Date(createdAt.format());
  const nextDate = new Date(next.format());

  if (
    currentdDate.getTime() <= createdAtDate.getTime() &&
    createdAtDate.getTime() < nextDate.getTime()
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
