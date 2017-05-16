export default (path) => ({
  path: path,
  getComponent (nextState, cb) {
    const container = require('./containers/InitContainer').default;
    cb(null, container);
  }
});
