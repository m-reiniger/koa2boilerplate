"use strict";
/**
 *  @author: Michael Reiniger
 */


const bunyan = require('bunyan'),
    VersionService = require('../Handler/Version/VersionService');

/**
 *
 */
class VersionController {

    /**
     *
     */
    constructor() {
        this.logger = bunyan.createLogger({name: __servicename, src: true, level: 20});
        this.versionHandler = new VersionService();
    }

    /**
     *
     * @param ctx
     */
    versionAction(ctx) {
        ctx.body = {
            "version": this.versionHandler.getVersion()
        };
    }

    /**
     *
     * @param ctx
     */
    statusCheckAction(ctx) {
        ctx.body = this.versionHandler.getStatusJson();
    }

    /**
     *
     * @param ctx
     */
    aliveAction(ctx) {
        ctx.body = 'OK';
    }


}

// *******************************************************
module.exports = VersionController;