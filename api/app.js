(function(){
    'use strict';

    var server = require('./server');
    var routes = require('./routes');

    server.start(function() {
        console.log("Basic logging");
    });
})();
