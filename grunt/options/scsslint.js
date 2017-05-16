'use strict';

module.exports = {
  all: [
    'src/**/*.{scss,sass}'
  ],
  options: {
    bundleExec: false,
    compact: true,
    colorizeOutput: true,
    config: '.scss-lint.yml',
    reporterOutput: 'reports/scss-lint-report.xml'
  }
};
