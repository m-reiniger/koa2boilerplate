/*global module*/

module.exports = function (grunt) {
    "use strict";

    grunt.registerTask('test', ['clean:reports', 'mocha_istanbul:coverage']);
};