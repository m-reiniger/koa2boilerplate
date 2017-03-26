/*!
 * Server Start Script and Entry Point for the Service Processes
 *
 * @author: Michael Reiniger
 */

'use strict';

global.__servicename = '[STARTUP]';

let path = require('path'),
    bunyan = require('bunyan'),
    fs = require('fs'),
    logger,
    moduleName = 'server',
    application;

// setting the root directory and make it global
global.__root = path.resolve(__dirname);

// initialize logging
logger = bunyan.createLogger({name: __servicename, src: true});

// read node arguments to determine what module is to be started
if (process.argv[2] !== undefined) {

    moduleName = process.argv[2];

    //check if the module exists and has a 'app.js' file.
    if (!fs.existsSync(__root + '/application/Modules/' + moduleName + '/Application.js')) {
        logger.error('There is no such module \'' + moduleName + '" to start.');
        process.exit(0);
    }
} else {
    logger.warn('Missing argument: module. Using default: server.');
}

global.__servicename = '[' + moduleName.toUpperCase() + ']';

//starting the server
logger.info('Starting ' + moduleName + '!');

let Application = require(__root + '/application/Modules/' + moduleName + '/Application.js');
let module2Start = new Application();
module2Start.start();

logger.info('Successfully started ' + moduleName + '.');

