import { connect } from 'react-redux';
import InitView from '../view/Init';
import InitService from '../services/InitService';

const mapDispatchToProps = {
  addData: () => ({
    store: 'section',
    type: 'addData'
  }),
  getMovieByName: (movieTitle) => {
    return InitService.getMovieByName({
      store: 'section',
      type: 'parseMovieData'
    }, movieTitle);
  }
};

const mapStateToProps = (state) => {
  return {
    init: {
      data: state.section.data,
      movieSelected: state.section.movieSelected
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitView);
