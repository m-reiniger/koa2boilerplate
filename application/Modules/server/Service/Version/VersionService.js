'use strict';

// reise modules
const EnvironmentAdapter = require('../../../../Adapter/EnvironmentAdapter'),
    toHHMMSS = require('../../../../Util/TimeUtil').toHHMMSS;

/**
 *
 */
class VersionService {

    /**
     *
     */
    constructor() {
        this.environment = new EnvironmentAdapter();
    }

    /**
     *
     * @returns {{status: string, version: *, node-version: String, environment: string, additionalInfo: {Uptime: string, Memory: (*|{})}}}
     */
    getStatusJson() {
        return {
            'status': 'OK',
            'version': this.environment.applicationVersion(),
            'node-version': this.environment.nodeVersion(),
            'environment': this.environment.applicationEnvironment(),
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
        return this.environment.applicationVersion();
    }
}


// *******************************************************
module.exports = VersionService;