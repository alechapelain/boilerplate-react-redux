'use strict';

module.exports = {
  // Empties folders to start fresh
  dist: {
    options: {
      force: true
    },
    files: [{
      dot: true,
      src: [
        '<%= boilerplateReactReduxConfig.options.webContentDir %>'
      ]
    }]
  },
  postDist: {
    options: {
      force: true
    },
    files: [{
      dot: true,
      src: [
        '<%= boilerplateReactReduxConfig.options.webContentDir %>/static/images'
      ]
    }]
  }
};
