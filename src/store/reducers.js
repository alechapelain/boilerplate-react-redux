import { combineReducers } from 'redux';

import coreReducer from '../layouts/CoreLayout/coreLayoutReducer';
import sectionReducer from '../routes/Section/sectionReducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    core: coreReducer,
    section: sectionReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
