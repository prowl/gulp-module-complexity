'use strict';

var should = require('should'); // jshint ignore:line

var complexity = require('../lib/index');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, func) {
  task = func;
};

var configMock = {
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

complexity(gulpMock, configMock);

describe('Gulp Module Complexity', function() {
  it('Should return a function', function() {
    complexity.should.be.type('function');
  });

  it('Should add a task', function() {
    task.should.be.type('function');
  });

  it('Should run and throw an error', function(cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
