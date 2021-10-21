import { Octokit } from '@octokit/core';

import ActionTypes from 'redux/actionTypes';

const octokitHelper = async ({ type, ...params }: any) => {
  const octokit = new Octokit({
    baseUrl: process.env.REACT_APP_BASE_URL_API,
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });
  if (type === ActionTypes.LOAD_ALL_STATS)
    return await octokit.request('GET /gists/public', {
      page: params.params.page,
      per_page: params.params.per_page,
      since: params.params.since,
    });
};

export default octokitHelper;
