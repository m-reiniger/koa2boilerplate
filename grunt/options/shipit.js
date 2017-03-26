/*global module*/
module.exports = {
    options: {
        workspace: './dist',
        deployTo: '/data/nodejs/discovery/',
        branch: 'master',
        repositoryUrl: 'git+ssh://git@code.eu.idealo.com:7999/reise/lib_nodejs-service-boilerplate.git',
        ignores: ['.git', 'node_modules', 'puphpet', 'reports', 'test', '.idea', '.vagrant', '.Vagrantfile'],
        keepReleases: 5,
        key: '/Users/sparx/.ssh/id_rsa.idealo',
        shallowClone: true
    },
    staging: {
        servers: [

        ]
    },
    production: {
        servers: [
        ]
    }
};