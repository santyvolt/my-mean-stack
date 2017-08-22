'use strict';
var ConfigModule = (function () {
    const path = require('path');

    let all = {
        env: process.env.NODE_ENV,
        root: path.normalize(`${__dirname}/../../..`),
        browserSyncPort: process.env.BROWSER_SYNC_PORT || 3000,
        port: process.env.PORT || 3000,
        ip: process.env.IP || '0.0.0.0',
    };

    function allConfig() {
        return all;
    }

    var publicAPI = {
        allConfig: allConfig
    };

    return publicAPI;
})();

module.exports = ConfigModule.allConfig();