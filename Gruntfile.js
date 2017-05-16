'use strict';

module.exports = function (grunt) {

  // check version before
  try {
    var pkg = grunt.file.readJSON('package.json');
  } catch(e) {
    grunt.fail.warn('Please check that the package.json file exist in the same folder as the Gruntfile.js')
  }

  if (typeof pkg.version === 'undefined') {
    grunt.fail.warn('Please check that the package.json has a version attribute')
  }

  var tag = grunt.option('tag');
  if (tag) {
    pkg.version = tag;
    grunt.file.write('package.json', JSON.stringify(pkg, null, '\t'));
    grunt.log.error('###################################################################################');
    grunt.log.error('##                                                                               ##');
    grunt.log.error('## version attribute in package.json has been modified and written to the disk!  ##');
    grunt.log.error('##                                                                               ##');
    grunt.log.error('###################################################################################');
  }

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  require('load-grunt-config')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var _ = grunt.util._,
      path = require('path');

  var config = _.extend({},
    require('load-grunt-config')(grunt, {
      configPath: path.join(__dirname, 'grunt/options'),
      loadGruntTasks: false,
      init: false
    }),
    require('load-grunt-config')(grunt, { // Custom options have precedence
      configPath: path.join(__dirname, 'grunt/custom-options'),
      init: false
    })
  );

  grunt.loadTasks('grunt/tasks');

  // Define the configuration for all the tasks
  grunt.initConfig(config);
};
