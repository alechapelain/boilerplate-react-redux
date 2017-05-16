/**
 * Store Data
 */
export const temp = {
  token: ''
};

/**
 * Actions
 */
export const actionFunctions = {
  setToken: (state, response) => {
    temp.token = response.token;
  }
};

/**
 * Reducer
 */
const initialState = 0;
export default function coreReducer(state = initialState, action) {
  const handler = actionFunctions[action.type];

  if (typeof handler !== 'undefined' && action.store === 'core') {
    handler(state, action);
  }

  return Object.assign({}, state, temp);
}
