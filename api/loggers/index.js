(function(){
    'use strict';

    var loggers = module.exports = {};

    loggers.winston = require('./winstonLogger');
    loggers.bunyan = require('./bunyanLogger');
})();