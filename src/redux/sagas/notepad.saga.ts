import { takeLatest } from 'redux-saga/effects';

import octokitMiddleware from '../middlewares/octokit.middleware';
import ActionTypes from '../actionTypes';

export default function* notepadSaga() {
  yield takeLatest(ActionTypes.LOAD_NOTEPAD, octokitMiddleware);
  yield takeLatest(ActionTypes.CREATE_NOTEPAD, octokitMiddleware);
  yield takeLatest(ActionTypes.UPDATE_NOTEPAD, octokitMiddleware);
  yield takeLatest(ActionTypes.DELETE_NOTEPAD, octokitMiddleware);
}
