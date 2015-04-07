(function() {
    var bunyan = require('bunyan');

    var logger = bunyan.createLogger({
        name: 'request-log',
        streams: [
            {
                level: 'info',
                stream: process.stdout
            },
            {
                level: 'error',
                path: '/bunyan-logs/bunyan-error.log'
            }
        ]
    });
    module.exports = logger;
})();