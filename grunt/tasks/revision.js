
module.exports = function (grunt) {
    "use strict";

    grunt.loadNpmTasks('grunt-git-describe');

    grunt.registerTask('revision', 'test', function () {
        grunt.event.once('git-describe', function (rev) {
            grunt.file.write('.revision', rev.object);
        });
        grunt.task.run('git-describe');

    });
};