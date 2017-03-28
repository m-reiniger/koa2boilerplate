"use strict";
/**
 *  @author: Michael Reiniger
 */


const bunyan = require('bunyan'),
    VersionService = require('../Service/Version/VersionService');

/**
 *
 */
class VersionController {

    /**
     *
     */
    constructor() {
        this.logger = bunyan.createLogger({name: __servicename, src: true, level: 20});
        this.versionService = new VersionService();
    }

    /**
     *
     * @param ctx
     */
    versionAction(ctx) {
        ctx.body = {
            "version": this.versionService.getVersion()
        };
    }

    /**
     *
     * @param ctx
     */
    statusCheckAction(ctx) {
        ctx.body = this.versionService.getStatusJson();
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