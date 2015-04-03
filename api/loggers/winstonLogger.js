(function() {
    'use strict';

    var winston = require('winston');

    //Can Log different types to different files
    var logger = new winston.Logger({
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({
                name: 'winston-info',
                filename: '/winston-logs/winston-info.log',
                level: 'info'
            }),

            new winston.transports.File({
                name: 'winston-errors',
                filename: '/winston-logs/winston-errors.log',
                level: 'error'
            }),

            new winston.transports.File({
                name: 'winston-exceptions',
                filename: '/winston-logs/winston-exceptions.log',
                level: 'info',
                handleExceptions: true
            })
        ],
        exitOnError: false
    });

    module.exports = logger;
})();