import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import CoreLayout from '../../layouts/CoreLayout/containers/CoreLayoutContainer';
import Home from '../../routes/Home';
import MovieFinder from '../../routes/MovieFinder';

class AppContainer extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={CoreLayout}>
            <IndexRoute component={Home} />
            <Route path="movie-finder" component={MovieFinder} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

AppContainer.propTypes = {
  store: PropTypes.object.isRequired
};

export default AppContainer;
