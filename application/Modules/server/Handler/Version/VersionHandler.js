'use strict';

// reise modules
const fs = require('fs'),
    toHHMMSS = require('../../../../Util/TimeUtil').toHHMMSS;

/**
 *
 */
class VersionHandler {

    /**
     *
     */
    constructor() {
        this.version = this._getVersion();
    }

    /**
     *
     * @returns {*}
     * @private
     */
    _getVersion() {
        let version = process.env.npm_package_version;

        if (!version) {
            let pjson = require(__root + '/package.json');
            version = pjson.version;
        }
        return version;
    }

    /**
     *
     * @returns {{status: string, version: *, node-version: String, environment: string, additionalInfo: {Uptime: string, Memory: (*|{})}}}
     */
    getStatusJson() {
        return {
            'status': 'OK',
            'version': this.version,
            'node-version': process.version,
            'environment': process.env.NODE_ENV,
            'additionalInfo': {
                'Uptime': toHHMMSS(process.uptime()),
                'Memory': process.memoryUsage()
            }
        };
    }

    /**
     *
     * @returns {*}
     */
    getVersion() {
        return this.version;
    }
}


// *******************************************************
module.exports = VersionHandler;