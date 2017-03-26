"use strict";

var documentProvider = require('./Document/DocumentProvider');

/**
 *
 * @constructor
 */
function ProviderFactory(){}

/**
 *
 * @param apiVersion
 * @returns {*}
 */
ProviderFactory.prototype.getDocumentProvider = function(apiVersion) {
    var service;

    switch (apiVersion) {
        case 'web-1.0.0': service = documentProvider; break;
        default: service = documentProvider; break;
    }
    return service;
};


module.exports = new ProviderFactory();