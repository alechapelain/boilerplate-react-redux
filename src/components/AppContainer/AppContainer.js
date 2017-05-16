import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

class AppContainer extends Component {
  render() {
    const { history, routes, store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history} children={routes} />
        </div>
      </Provider>
    );
  }
}

AppContainer.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default AppContainer;