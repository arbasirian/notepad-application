import axios from 'axios';
import { cookiesHelper } from 'helpers';

const axiosHelper = ({
  token = process.env.REACT_APP_GITHUB_TOKEN,
  ...params
}: any) => {
  const cookies = new cookiesHelper();

  const authorization = token || cookies.get('notepad_application_token');

  const header = authorization
    ? {
        Authorization: `Token ${authorization}`,
        'accept-language': 'en',
        accept: 'application/vnd.github.v3+json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      }
    : {
        'accept-language': 'en',
        accept: 'application/vnd.github.v3+json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      };

  const data = {
    method: 'get',
    headers: header,
    ...params,
  };

  if (process.env.REACT_APP_BASE_URL_API)
    data.baseURL = `${process.env.REACT_APP_BASE_URL_API}`;

  return axios(data);
};

export default axiosHelper;
