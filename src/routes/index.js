// We only need to import the modules necessary for initial render
import { injectReducer } from '../store/reducers';

import Home from './Home';
import SectionInit from './Section/Init';

/*  Note: Instead of using JSX, we recommend using react-router
 PlainRoute objects to build route definitions.   */
export const createRoutes = (store) => ({
  path: '/',
  getComponent: (nextState, cb) => {
    const container = require('../layouts/CoreLayout/containers/CoreLayoutContainer').default;
    const reducer = require('../layouts/CoreLayout/coreLayoutReducer').default;

    injectReducer(store, { key: 'core', reducer });
    cb(null, container);
  },
  indexRoute: Home,
  childRoutes: [
    SectionInit('/section')
  ]
});

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

      getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/
export default createRoutes;
