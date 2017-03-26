"use strict";

var path = require('path'),
    config = require("reise-config-manager");

// setting the environment to test, so the test configs are loaded
process.env.NODE_ENV = "test";
global.__servicename = '[TEST]';

global.__root = path.resolve(__dirname + "/..");

/** fakes **/
var fakeLogger = require('./fakes/Fakes').logger;

require('should');
require('assert');

describe('Module/Type/Class.js', function () {

    before(function (done) {
        config.load('api', {dir: __root + "/config/", file: "config", logger: fakeLogger.logger});
        fakeLogger.clear();
        done();
    });

    beforeEach(function(done){
        done();
    });



    describe('someFunction()', function () {
        it(' should do something', function (done) {

            done();
        });
    });


    afterEach(function(done){
        fakeLogger.clear();
        done();
    });

    after(function (done){
        fakeLogger.clear();
        delete require.cache;
        done();
    });
});