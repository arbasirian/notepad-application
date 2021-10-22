import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import notepadReducer from './notepad.reducer';
import statsReducer from './stats.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['notepad'],
};

const appReducer = combineReducers({
  notepad: notepadReducer,
  stats: statsReducer,
});

const rootReducer = (state: any, action: any) => {
  // Clear all data in redux store to initial.
  if (action.type === 'DESTROY_SESSION') state = undefined;

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
