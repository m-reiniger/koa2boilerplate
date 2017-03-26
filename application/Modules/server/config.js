"use strict";

const convict = require('convict'),
    fs = require('fs'),
    bunyan = require('bunyan'),
    path = require('path');

let config = convict({}),
    env = process.env.NODE_ENV,
    globalMainConfigFile = __root + '/config/config.json',
    globalEnvConfigFile = __root + '/config/config-' + env + '.json',
    localMainConfigFile = path.resolve(__dirname) + '/config/config.json',
    localEnvConfigFile = path.resolve(__dirname) + '/config/config-' + env + '.json',
    logger = bunyan.createLogger({name: __servicename, src: true});


// global config
if (fs.existsSync(globalMainConfigFile)) {
    config.loadFile(globalMainConfigFile);
    logger.info('loading config file ' + globalMainConfigFile);
}

if (fs.existsSync(globalEnvConfigFile)) {
    config.loadFile(globalEnvConfigFile);
    logger.info('loading config file ' + globalEnvConfigFile);
}

if (fs.existsSync(localMainConfigFile)) {
    config.loadFile(localMainConfigFile);
    logger.info('loading config file ' + localMainConfigFile);
}

if (fs.existsSync(localEnvConfigFile)) {
    config.loadFile(localEnvConfigFile);
    logger.info('loading config file ' + localEnvConfigFile);
}

module.exports = config;