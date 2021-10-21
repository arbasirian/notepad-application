import { takeLatest } from 'redux-saga/effects';

import octokitMiddleware from '../middlewares/octokit.middleware';
import ActionTypes from '../actionTypes';

export default function* mainSaga() {
  // yield takeLatest(ActionTypes.any, octokitMiddleware); SAMPLE
}
