import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import mainReducer from './main.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['notepad'],
};

const appReducer = combineReducers({
  main: mainReducer,
});

const rootReducer = (state: any, action: any) => {
  // Clear all data in redux store to initial.
  if (action.type === 'DESTROY_SESSION') state = undefined;

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
