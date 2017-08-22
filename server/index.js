'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const u = require('./utils');
u.notify('Starting the app - Welcome Santosh');

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = require('./app');
app.init();