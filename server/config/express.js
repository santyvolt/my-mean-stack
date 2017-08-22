'use strict';
var ExpressModule = function () {
    const express = require('express');
    const favicon = require('serve-favicon');
    const morgan = require('morgan');
    const bodyParser = require('body-parser');
    const methodOverride = require('method-override')
    const cookieParser = require('cookie-parser');
    const errorHandler = require('errorhandler');
    const passport = require('passport');
    const session = require('express-session');
    const config = require('./env');
    const path = require('path');

    function init(app) {
        // app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));
        app.set('appPath', path.join(config.root, 'public'));
        app.use(express.static(app.get('appPath')));
        app.use(morgan('dev'));

        app.set('views', `${config.root}/server/views`);
        app.set('view engine', 'pug');
        app.use(bodyParser.urlencoded({
            extended: false
        }));
        app.use(bodyParser.json());
        app.use(methodOverride());
        app.use(cookieParser());
        app.use(passport.initialize());
        app.use(errorHandler()); // Error handler - has to be last
    }

    var publicAPI = {
        init: init
    };
    return publicAPI;
};

module.exports = new ExpressModule;