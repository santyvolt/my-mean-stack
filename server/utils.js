'use strict';
var UtilModule = function () {
    const config = require('./config/env');

    function showConfig() {
        console.log(config);
    }

    function getConfig() {
        return config;
    }

    function notify(msg) {
        console.log(msg);
    }

    var publicAPI = {
        notify: notify,
        showConfig: showConfig,
        getConfig: getConfig
    };

    return publicAPI;
};

module.exports = new UtilModule;