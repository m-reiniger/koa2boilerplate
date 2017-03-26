/*global module*/

module.exports = function (grunt) {
    "use strict";

    grunt.loadNpmTasks('grunt-shipit');
    grunt.loadNpmTasks('shipit-deploy');

    grunt.registerTask('production', ['revision','shipit:production']);

    grunt.shipit.on('published', function () {
        grunt.task.run(['service-start']);
    });
};