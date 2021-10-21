import { GistModel } from 'types';

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

export default {
  cleanGistsList,
};
