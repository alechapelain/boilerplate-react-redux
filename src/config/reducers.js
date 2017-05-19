import { combineReducers } from 'redux';

import coreReducer from '../layouts/CoreLayout/coreLayoutReducer';
import movieReducer from '../resources/movie/movie.reducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    core: coreReducer,
    movie: movieReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
