'use strict';

var appModule = function () {
    const config = require('./utils').getConfig();
    const colors = require('colors');
    const express = require('express');

    const http = require('http');

    let app = express();
    let server = http.createServer(app);

    var startServer = function () {
        require('./config/express').init(app);
        require('./routes').init(app);
        server.listen(config.port, config.ip, function () {
            console.log('Server started on ' + config.port);
        });
    }

    function init() {
        setImmediate(startServer);
    }

    var publicAPI = {
        init: init
    }

    return publicAPI;
}

module.exports = new appModule;