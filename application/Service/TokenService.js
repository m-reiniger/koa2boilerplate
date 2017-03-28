"use strict";

var jwt = require('jsonwebtoken'),
    config = require("reise-config-manager");

/**
 *
 * @constructor
 */
var TokenService = function () {
};

/**
 *
 * @param payload
 * @returns {number|string}
 */
TokenService.prototype.createToken = function (payload){
    return jwt.sign(payload, config.api.jwt.keyPhrase);
};

/**
 *
 * @param token
 */
TokenService.prototype.verifyToken = function (token) {
    return jwt.verify(token, config.api.jwt.keyPhrase);
};


/**
 *
 * @returns {string}
 */
TokenService.prototype.version = function () {
    return "web-1.0.0";
};


module.exports = new TokenService();