(function() {
    var bunyan = require('bunyan');

    var log = jbunyan.createLogger({name: 'appLogger'});
    module.exports = log;
})();