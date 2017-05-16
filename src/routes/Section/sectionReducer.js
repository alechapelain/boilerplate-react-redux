import data from '../../static/data/mock.json';
import jobList from '../../static/data/job.json';
import nameList from '../../static/data/name.json';

/**
 * Store Data
 */
export const temp = {
  data: data,
  movieSelected: {}
};

/**
 * Actions
 */
const getRandom = (type) => {
  if (type === 'job') {
    return jobList.list[Math.floor((Math.random() * (jobList.list.length - 1)))];
  } else if (type === 'name') {
    return nameList.list[Math.floor((Math.random() * (nameList.list.length - 1)))];
  }
};

export const actionFunctions = {
  addData: (state) => {
    state.data.list.push({
      id: (parseInt(state.data.list[state.data.list.length - 1].id, 10) + 1),
      name: getRandom('name'),
      job: getRandom('job')
    });
  },
  parseMovieData: (state, response) => {
    temp.movieSelected = response.movie;
  }
};

/**
 * Reducer
 */
const initialState = 0;
export default function planItReducer(state = initialState, action) {
  const handler = actionFunctions[action.type];

  if (typeof handler !== 'undefined' && action.store === 'section') {
    handler(state, action);
  }

  return Object.assign({}, state, temp);
}
