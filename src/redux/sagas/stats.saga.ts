import { takeLatest } from 'redux-saga/effects';

import octokitMiddleware from '../middlewares/octokit.middleware';
import ActionTypes from '../actionTypes';

export default function* mainSaga() {
  yield takeLatest(ActionTypes.LOAD_ALL_STATS, octokitMiddleware);
  yield takeLatest(ActionTypes.LOAD_MORE_STATS, octokitMiddleware);
}
