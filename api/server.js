(function() {
    'use strict';
    var Hapi = require('hapi');

    var options = {
        port: 3000
    };

    var server = new Hapi.Server();
    server.connection(options);

    module.exports = server;
})();
