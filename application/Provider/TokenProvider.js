"use strict";

var jwt = require('jsonwebtoken'),
    config = require("reise-config-manager");

/**
 *
 * @constructor
 */
var TokenProvider = function () {
};

/**
 *
 * @param payload
 * @returns {number|string}
 */
TokenProvider.prototype.createToken = function (payload){
    return jwt.sign(payload, config.api.jwt.keyPhrase);
};

/**
 *
 * @param token
 */
TokenProvider.prototype.verifyToken = function (token) {
    return jwt.verify(token, config.api.jwt.keyPhrase);
};


/**
 *
 * @returns {string}
 */
TokenProvider.prototype.version = function () {
    return "web-1.0.0";
};


module.exports = new TokenProvider();