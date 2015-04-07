(function() {
    'use strict';

    var server = require('./server');

    //Winston Routes
    var winstonLogger = require('./loggers').winston;
    server.route([
        {
            method: 'GET',
            path: '/winston-success/{message}',
            handler: function(request, reply) {
                var message = request.params.message;

                //Built in string interpolation
                winstonLogger.log('debug', 'requesting [%s]', message);
                reply({message: message});
            }
        },
        {
            method: 'GET',
            path: '/winston-error/{message}',
            handler: function(request, reply) {
                var message = request.params.message;
                var data = null;

                winstonLogger.log('info', 'making request with data: %j', {message: message}, {});
                if(message == 'data') {
                    data = {details: 'incorrect arguments passed'};
                }

                winstonLogger.log("error", "Bad Request made", data);
                reply.continue();
            }
        },
        {
            method: 'GET',
            path: '/winston-query',
            handler: function(request, reply) {
                var query = {
                    from: new Date() - 24 * 60 * 60 * 1000,
                    until: new Date(),
                    limit: 10,
                    start: 0,
                    order: 'desc'
                };

                winstonLogger.query(query, function(err, results) {
                    reply(results);
                });
            }
        }]);

    //Bunyan Routes
    var bunyanLogger = require('./loggers').bunyan;
    server.route([
        {
            method: 'GET',
            path: '/bunyan-success/{message}',
            handler: function(request, reply) {
                var message = request.params.message;
                bunyanLogger.info('User has sent the message: %j', message);
                reply({message: message});
            }
        },
        {
            method: 'GET',
            path: '/bunyan-error/{message}',
            handler: function(request, reply) {
                var message = request.params.message;
                var data = null;

                bunyanLogger.info('making request with data: %j', {message: message});
                if(message == 'data') {
                    data = {details: 'incorrect arguments passed'};
                    bunyanLogger.error("Bad Request made", data);
                }

                reply.continue();
            }
        }
    ]);
})();