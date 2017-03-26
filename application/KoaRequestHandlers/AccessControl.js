'use strict';

/**
 *
 */
class AccessControl {

    /**
     *
     */
    constructor() {

    }

    /**
     *
     * @param ctx
     * @param next
     * @returns {Promise.<void>}
     */
    async process(ctx, next) {
        ctx.set('Access-Control-Allow-Origin', '*');
        await next();
    }
}

module.exports = AccessControl;
