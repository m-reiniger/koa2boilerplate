/*jshint node: true*/
/*global require, module, process, console*/

module.exports = function (grunt) {
    "use strict";

    var config;

    config = {
        pkg: grunt.file.readJSON('package.json')
    };

    function loadConfig(path) {
        var glob = require('glob'),
            object = {},
            key;
        glob.sync('*', {cwd: path}).forEach(function (option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });
        return object;
    }

    grunt.util._.extend(config, loadConfig('./grunt/options/'));
    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', '*-less']});
    grunt.loadTasks('grunt/tasks');
};
