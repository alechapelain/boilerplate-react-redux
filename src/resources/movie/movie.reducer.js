/**
 * Actions
 */
export const actionFunctions = {
  updateSelectedMovie: (state, response) => {
    state.movieSelected = response.movie;
  },
  updateMovieSearchList: (state, response) => {
    state.movieSearchList = response.movieSearchList;
  }
};

/**
 * Default Store Data
 */
const initialState = {
  movieSearchList: [],
  movieSelected: {}
};

/**
 * Reducer
 */
export default function planItReducer(state = initialState, action) {
  const handler = actionFunctions[action.type];

  if (typeof handler !== 'undefined' && action.store === 'movie') {
    handler(state, action);
  }

  return Object.assign({}, state);
}
