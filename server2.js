'use strict';

const express = require('express');
const http = require('http');


var app = express();
var server = http.createServer(app);

function startServer() {
    server.listen(3000, '0.0.0.0', function () {
        console.log('started on 3000');
    });
}

setImmediate(startServer);