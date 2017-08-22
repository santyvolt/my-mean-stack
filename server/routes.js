'use strict';

var AppRoutes = function () {
    const path = require('path');
    const utils = require('./utils');

    function configureAPIRoutes(app) {
        utils.notify('config API routes');
    }

    function configureDefaultRoutes(app) {
        utils.notify('config default routes');
        app.route('/*')
            .get((req, res) => {
                res.render('index', {
                    title: 'Home Page.  ',
                    version: '2.0',
                    runEnvironment: 'DEV',
                    minified: '.min'
                })
            });
    }

    function configureErrorRoutes(app) {
        utils.notify('config error  routes');
        // app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        //     .get(errors[404]);
    }

    function init(app) {
        configureErrorRoutes(app);
        configureDefaultRoutes(app);
        configureAPIRoutes(app);
    }

    var publicAPI = {
        init: init
    }
    return publicAPI;
}

module.exports = new AppRoutes