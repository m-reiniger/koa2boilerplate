/*global module*/

module.exports = function (grunt) {
    "use strict";

    grunt.loadNpmTasks('grunt-shipit');
    grunt.loadNpmTasks('shipit-deploy');

    grunt.registerTask('staging', ['revision', 'shipit:staging']);

    grunt.shipit.on('published', function () {
        grunt.task.run(['service-start']);
    });
};