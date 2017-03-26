"use strict";

var tokenProvider = require('./../Provider/TokenProvider');

module.exports = decodeToken;

/**
 * Checks for a token in the request and adds its payload to the context object
 *
 * @return {Function}
 * @api public
 */

function decodeToken() {
    return function* decodeToken(next){
        var decoded = false;

        // read from query - should NOT be used. Use header instead
        if(this.query.token){
            decoded = tokenProvider.verifyToken(this.query.token);
        }

        // read from header
        if(this.request.header['x-auth-token']){
            decoded = tokenProvider.verifyToken(this.request.header['x-auth-token']);
        }

        this.auth = decoded;
        yield next;
    };
}
