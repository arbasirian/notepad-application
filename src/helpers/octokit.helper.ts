import { Octokit } from '@octokit/core';

import ActionTypes from 'redux/actionTypes';

const octokitHelper = async ({ type, ...params }: any) => {
  const octokit = new Octokit({
    baseUrl: process.env.REACT_APP_BASE_URL_API,
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });
  if (
    type === ActionTypes.LOAD_ALL_STATS ||
    type === ActionTypes.LOAD_MORE_STATS ||
    type === ActionTypes.LOAD_ALL_STATS_FILES ||
    type === ActionTypes.LOAD_MORE_STATS_FILES
  )
    return await octokit.request('GET /gists/public', {
      page: params.params.page,
      per_page: params.params.per_page,
      since: params.params.since,
    });

  if (type === ActionTypes.CREATE_NOTEPAD)
    return await octokit.request('POST /gists', { ...params.data });

  if (type === ActionTypes.LOAD_NOTEPAD)
    return await octokit.request(`GET /gists/${params.params.notepadId}`);

  if (type === ActionTypes.DELETE_NOTEPAD)
    return await octokit.request(`DELETE /gists/${params.params.notepadId}`);

  if (type === ActionTypes.UPDATE_NOTEPAD)
    return await octokit.request(`PATCH /gists/${params.data.notepadId}`, {
      ...params.data.notepad,
      gist_id: params.data.notepadId,
    });

  return await octokit;
};

export default octokitHelper;
