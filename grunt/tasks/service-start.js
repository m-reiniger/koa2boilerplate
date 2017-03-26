module.exports = function (grunt) {
    "use strict";

    grunt.loadNpmTasks('grunt-shipit');
    grunt.loadNpmTasks('shipit-deploy');

    grunt.registerTask('service-start', function () {
        var done = this.async();
        var current = grunt.config('shipit.options.deployTo') + '/current';
        //var serviceName = grunt.config('shipit.options.serviceName');

        // it is very important that pm2 startOrRestart is called with an absolute path to the process.json file
        // because current is a symbolic link. Starting without an absolute path will always restart the old version

        grunt.shipit.remote('cd ' + current + ' && npm install', function() {
            grunt.shipit.remote('pm2 stop ' + current + '/processes-' + grunt.shipit.environment + '.json', function(){
                grunt.shipit.remote('pm2 delete ' + current + '/processes-' + grunt.shipit.environment + '.json', function() {
                    grunt.shipit.remote('cd ' + current + ' && pm2 startOrRestart ' + current + '/processes-' + grunt.shipit.environment + '.json', done);
                });
            });
        });
    });
};