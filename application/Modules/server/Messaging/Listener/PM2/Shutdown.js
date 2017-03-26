"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger(__servicename + __filename.replace(__root, ''));

/**
 *
 * @param message
 */
function preShutdown(message){
    logger.debug('received shut down message from PM2. closing down application');

    // do your stuff here, before shutting down.
    // exit process, when you are done closing everything


    //set a timeout to let the logging finish and then shut down
    logger.debug('Recieved message: ' + message + '. Good Buy!');
    setTimeout(function(){
        process.exit(0);
    }, 500);
}

// *******************************************************
module.exports = preShutdown;