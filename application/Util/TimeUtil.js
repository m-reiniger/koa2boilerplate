"use strict";

/**
 *
 * @param base
 * @returns {string}
 */
module.exports.toHHMMSS = function (base) {
    let sec_num = parseInt(base, 10),
        days = Math.floor(sec_num / 86400),
        hours = Math.floor((sec_num - (days * 86400)) / 3600),
        minutes = Math.floor((sec_num - (days * 86400) - (hours * 3600)) / 60),
        seconds = sec_num - (days * 86400) - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
};