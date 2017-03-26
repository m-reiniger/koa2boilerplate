'use strict';

const bunyan = require('bunyan');

class ErrorHandler {

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
        try {
            await next();
            let status = ctx.status || 404;
            if (status === 404) {
                throw({code: 404, message: 'Not Found ' + ctx.request.url});
            }
        } catch (error) {
            this.logger.error(error.code + ': ' + error.message);
            ctx.status = error.status || 500;
            ctx.body = error.message;
        }
    }
}

module.exports = ErrorHandler;
