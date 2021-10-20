import { all } from 'redux-saga/effects';

import mainSaga from './main.saga';
import statsSaga from './stats.saga';

export default function* rootSaga() {
  yield all([mainSaga(), statsSaga()]);
}
