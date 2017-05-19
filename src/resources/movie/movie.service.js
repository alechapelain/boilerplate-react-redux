import API from '../../modules/API';
import MovieInterface from './movie.interface';

const services = {
  getMovieByName: (action, movieTitle) => {
    return (dispatch) => {
      API.getMovieByName(movieTitle)
        .then((movie) => {
          action.movie = movie;
          dispatch(action);
        })
        .catch(() => {
          dispatch({ type: 'ERROR' });
        });
    };
  },
  searchMovieByName: (action, movieSearch) => {
    return (dispatch) => {
      API.searchMovieByName(movieSearch)
        .then((response) => {
          action.movieSearchList = MovieInterface.parseSearchMovieByName(response);
          dispatch(action);
        })
        .catch(() => {
          dispatch({ type: 'ERROR' });
        });
    };
  }
};

export default services;
