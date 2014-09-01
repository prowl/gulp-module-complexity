'use strict';

var complexity = require('gulp-complexity');

// these are just local references to the setup parameters
var config = null;
var gulp = null;

/**
 * Adds the complexity analysis task to gulp
 *
 * @param {Object} gulpRef the instance of gulp to attach the task to
 * @param {Object} conf The configuration Object
 */
function compSetup(gulpRef, conf) {
  // assign our paramters to a local reference
  config = conf;
  gulp = gulpRef;

  gulp.task('comp', false, compTask);
}

/**
 * Runs the complexity report and outputs it to the console
 *
 */
function compTask() {
  return gulp.src(config.src)
    .pipe(complexity());
}

module.exports = compSetup;
