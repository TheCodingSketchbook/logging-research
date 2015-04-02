(function() {
    'use strict';
    var Hapi = require('hapi');

    var options = {
        port: 3000,
        minimal: true
    };

    var server = new Hapi.Server();
    server.connection(options);

    module.exports = server;
})();
