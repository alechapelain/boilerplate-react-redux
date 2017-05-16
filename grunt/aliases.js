'use strict';

module.exports = {
  'postBuild': {
    tasks: [
      'optimize',
      'notify:build'
    ]
  },
  'optimize': {
    tasks: [
      'clean:postDist',
      'imagemin:dist'
    ]
  }
};
