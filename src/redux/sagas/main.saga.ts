import { takeLatest } from 'redux-saga/effects';

import axiosMiddleware from '../middlewares/axios.middleware';
import ActionTypes from '../actionTypes';

export default function* mainSaga() {
  // yield takeLatest(ActionTypes.any, axiosMiddleware); SAMPLE
}
