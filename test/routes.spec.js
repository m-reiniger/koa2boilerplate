var path, config, request, server, testResult;

// setting the environment to test, so the test configs are loaded
process.env.NODE_ENV = "test";
global.__servicename = '[TEST]';

path = require('path');
global.__root = path.resolve(__dirname + "/..");

// loading the right config
config = require("reise-config-manager");
config.load('api', {dir: __root + "/config/", file: "config"});

request = require('supertest');
server = require(__root + '/application/Modules/server/app.js');

require('should');
require('assert');

describe('Routing', function () {

    "use strict";

    var url = 'http://localhost';

    // within before() you can run all the operations that are needed to setup your tests. In this case
    // I want to load the config and start the server, and when I'm done, I call done().
    before(function (done) {

        url = 'http://localhost:' + config.api.server.port;     // missing config.api.server.baseroute
        server.start();

        done();
    });

    after(function (done) {
        server.close();
        delete require.cache[__root + '/application/Modules/server/app.js'];
        done();
    });

    // use describe to give a title to your test suite, in this case the tile is "Account"
    // and then specify a function in which we are going to declare all the tests
    // we want to run. Each test starts with the function it() and as a first argument
    // we have to provide a meaningful title for it, whereas as the second argument we
    // specify a function that takes a single parameter, "done", that we will use
    // to specify when our test is completed, and that's what makes easy
    // to perform async test!

    // test some undefined route
    describe('get /api/some/undefined/route', function () {
        it('should return with Status 404', function (done) {
            request(url)
                .get('/api/some/unrouted/path')
                .expect(404)
                .end(function (err) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
        });

    });

});
