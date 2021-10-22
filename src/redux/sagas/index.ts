import { all } from 'redux-saga/effects';

import notepadSaga from './notepad.saga';
import statsSaga from './stats.saga';

export default function* rootSaga() {
  yield all([notepadSaga(), statsSaga()]);
}
