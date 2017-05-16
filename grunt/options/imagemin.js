'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= boilerplateReactReduxConfig.options.webContentDir %>',
      src: '**/*.{png,jpg,jpeg,gif,svg}',
      dest: '<%= boilerplateReactReduxConfig.options.webContentDir %>'
    }]
  }
};
