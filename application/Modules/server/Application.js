'use strict';

const Koa = require('koa'),
    Router = require('koa-router'),
    bunyan = require('bunyan');
//compress = require('koa-compress'),
//bodyParser = require('koa-bodyparser'),
//serve = require('koa-static'),

/**
 *
 */
class Application {

    /**
     *
     */
    constructor() {
        this.conf = {};
        this.app = {};
        this.port = 80;

        this.router = Router();

        this._configure();
    }

    /**
     *
     * @private
     */
    _configure() {
        this.logger = bunyan.createLogger({name: __servicename, src: true, level: 20});

        this.conf = require('./config');
        this.port = this.conf.get('server.port');

        this.app = new Koa();

        this._configureRequestHandlers();

        this._routing();
        this.app.use(this.router.routes());
    }

    /**
     *
     * @private
     */
    _configureRequestHandlers() {
        let requestHandlers = this.conf.get('requestHandlers');

        for (let i = 0, len = requestHandlers.length; i < len; i = i + 1) {
            let handlerName = requestHandlers[i],
                handlerClass = require('../../KoaRequestHandlers/' + handlerName),
                handler = new handlerClass();

            this.logger.info('adding ' + handlerName + ' to request handler chain');

            this.app.use(async function (ctx, next) {
                await handler.process(ctx, next);
            });
        }
    }

    /**
     *
     * @private
     */
    _routing() {

        let routes = this.conf.get('routing');
        let routingKeys = Object.keys(routes);

        for (let i = 0, len = routingKeys.length; i < len; i = i + 1) {
            let route = routingKeys[i],
                routingDefinition = routes[routingKeys[i]],
                ControllerClass = require('./Controller/' + routingDefinition.controller + 'Controller'),
                controller = new ControllerClass(),
                method = routingDefinition.method;

            this.logger.info('binding route ' + method + ' ' + route + ' to ' +
                routingDefinition.controller + 'Controller.' +
                routingDefinition.action + 'Action()');


            this.router[method.toLowerCase()](route, async function (ctx, next) {
                await controller[routingDefinition.action + 'Action'](ctx);
                await next();
            });

        }


    }

    /**
     *
     */
    start() {
        this.logger.info('Starting Koa to listen on port ' + this.port);
        this.app.listen(this.port);
    }

    /**
     *
     */
    shutdown() {

    }
}


// *******************************************************
module.exports = Application;

