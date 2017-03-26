"use strict";

delete require.cache.log4js;

var log4js = require('log4js'),
    logger = log4js.getLogger(__servicename + __filename.replace(__root, ''));


function FakeLogger() {
    this.messages = [];
}

FakeLogger.prototype.clear = function () {
    this.messages = [];
};

FakeLogger.prototype.addMessage = function (level, message, object) {
    this.messages.push(
        {
            "level": level,
            "message": message,
            "object": object
        }
    );
};

FakeLogger.prototype.getMessage = function (index) {
    return this.messages[index];
};

FakeLogger.prototype.hasMessage = function (level, message) {
    for (var i = 0, len = this.messages.length; i < len; i++) {
        var msg = this.messages[i];
        if (msg.level === level && msg.message === message) {
            return true;
        }
    }
    return false;
};

FakeLogger.prototype.hasMessageAtIndex = function (index, level, message) {
    var msg = this.messages[index];
    return (msg.level === level && msg.message === message);
};


/*********
 * FAKE CODE
 */


logger.info = function (message, object) {
    fake.addMessage("info", message, object);
};

logger.debug = function (message, object) {
    fake.addMessage("debug", message, object);
};

logger.error = function (message, object) {
    fake.addMessage("error", message, object);
};

logger.warn = function (message, object) {
    fake.addMessage("warn", message, object);
};

FakeLogger.prototype.logger = logger;


log4js.getLogger = function(){
    return logger;
};

var fake = new FakeLogger();
module.exports = fake;