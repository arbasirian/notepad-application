import { Octokit } from '@octokit/core';

import ActionTypes from 'redux/actionTypes';

const octokitHelper = async ({ type, ...params }: any) => {
  console.log(
    `a`,
    process.env.REACT_APP_GITHUB_TOKEN,
    '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',
    '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' ===
      process.env.REACT_APP_GITHUB_TOKEN
  );
  console.log(
    `!!`,
    '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' ===
      process.env.REACT_APP_GITHUB_TOKEN
  );
  const octokit = new Octokit({
    baseUrl: process.env.REACT_APP_BASE_URL_API,
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });
  console.log(`params`, params);
  if (type === ActionTypes.LOAD_ALL_STATS)
    return await octokit.request('GET /gists/public', {
      page: params.params.page,
      per_page: params.params.per_page,
      since: params.params.since,
    });
};

export default octokitHelper;
