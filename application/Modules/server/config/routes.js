"use strict";

var router = require('koa-router')();

/**
 * Configure your routes here
 * @see http://expressjs.com/4x/api.html#router
 *
 * bind a action/function to a route:
 * router.method('/route', controllers.ControllerObject.ActionFunction);
 *
 * @param controllers Object of Controllers
 */
function setup(controllers) {

    // version and health check
    router.get('/version', function* (next) {
        controllers.version.version(this);
        yield next;
    });

    router.get('/status/check', function* (next) {
        controllers.version.statusCheck(this);
        yield next;
    });

    router.get('/status/health', function* (next) {
        controllers.version.statusCheck(this);
        yield next;
    });

    router.get('/status/alive', function* (next) {
        controllers.version.alive(this);
        yield next;
    });


    /**
     * user crud
     */


        // get user
    router.get('/:version/user/:id', function* (next) {
        yield controllers.document.getDocument(this);
        yield next;
    });

    // create user
    router.post('/:version/user', function* (next) {
        yield controllers.document.createDocument(this);
        yield next;
    });

    // update user
    router.put('/:version/user/:id', function* (next) {
        yield controllers.document.updateDocument(this);
        yield next;
    });

    // delete user
    router.delete('/:version/user/:id', function* (next) {
        yield controllers.document.deleteDocument(this);
        yield next;
    });

}


// *******************************************************
module.exports.setup = setup;
module.exports.router = router;