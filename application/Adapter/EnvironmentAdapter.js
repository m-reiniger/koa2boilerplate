'use strict';


/**
 *
 */
class EnvironmentAdapter {

    /**
     *
     * @returns {*}
     */
    applicationVersion() {
        let version = process.env.npm_package_version;

        if (!version) {
            let pjson = require('../../package.json');
            version = pjson.version;
        }
        return version;
    }

    /**
     *
     * @returns {String}
     */
    nodeVersion() {
        return process.version;
    }

    /**
     *
     * @returns {*}
     */
    applicationEnvironment() {
        return process.env.NODE_ENV;
    }

}

module.exports = EnvironmentAdapter;