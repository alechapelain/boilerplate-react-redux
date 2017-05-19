import { connect } from 'react-redux';
import MovieFinderComponent from './MovieFinder.component';
import MovieFinderService from '../../resources/movie/movie.service';

const mapDispatchToProps = {
  getMovieByName: (movieTitle) => {
    return MovieFinderService.getMovieByName({
      store: 'movie',
      type: 'updateSelectedMovie'
    }, movieTitle);
  },
  searchMovieByName: (movieSearch) => {
    return MovieFinderService.searchMovieByName({
      store: 'movie',
      type: 'updateMovieSearchList'
    }, movieSearch);
  }
};

const mapStateToProps = (state) => {
  return {
    movieSearchList: state.movie.movieSearchList,
    movieSelected: state.movie.movieSelected
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieFinderComponent);
