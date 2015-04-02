(function() {
    'use strict';

    var server = require('./server');
    var handlers = require('./routeHandlers');

    server.route({
        method: 'GET',
        path: '/{someInfo}',
        handler: handlers.console.getData
    })
})();