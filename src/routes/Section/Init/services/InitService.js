import API from '../../../../modules/API';

const services = {
  getMovieByName: (action, movieTitle) => {
    return (dispatch) => {
      API.getMovieByName(movieTitle)
        .then((movie) => {
          action.movie = movie; // adding the response data to the options to pass to reducer
          dispatch(action);
        })
        .catch(() => {
          dispatch({ type: 'ERROR' });
        });
    };
  }
};

export default services;
