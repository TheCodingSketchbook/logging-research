(function() {
    'use strict';

    var winston = require('winston');

    var handlers = module.exports = {};

    handlers.getData = function(request, response) {
        var info = request.params.name;

        winston.log('debug', 'requesting + [' + info + "]")
    }
})();