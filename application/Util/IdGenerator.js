"use strict";


module.exports = function (useHyphen) {
    var uh = useHyphen === undefined ? true : useHyphen,
        pattern = uh === true ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx',
        d = new Date().getTime(),
        uuid = pattern.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

    return uuid;
};