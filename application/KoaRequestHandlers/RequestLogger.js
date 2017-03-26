'use strict';

const bunyan = require('bunyan');

/**
 *
 */
class RequestLogger {

    /**
     *
     */
    constructor() {
        this.logger = bunyan.createLogger({name: __servicename, src: true, level: 20});
    }

    /**
     *
     * @param ctx
     * @param next
     * @returns {Promise.<void>}
     */
    async process(ctx, next) {
        this.logger.info({method: ctx.request.method, url: ctx.request.url, 'user-agent': ctx.request.header['user-agent']}, 'request');
        await next();
    }
}

module.exports = RequestLogger;

