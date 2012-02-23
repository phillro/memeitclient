var querystring = require('querystring'),
    events = require('events'),
    http = require('http');
https = require('https');

module.exports = MemeItClient;
Streams = require('./calls/streams.js')
MemeItCall = require('./calls/memeItCall.js');

function MemeItClient(options) {
    this.clientOptions = options || {}
}

MemeItClient.prototype.createCall = function(params, options) {
    //If options.hosts round robin the hosts
    if (options.hosts) {
        var nextHost = options.hosts.shift();
        options.hosts.push(nextHost);
    }else{
        nextHost=options;
    }
    return new MemeItCall(params, nextHost);
}

MemeItClient.prototype.basicCall = function (path, method, params, clientOptions) {
    var qs = '';
    if (params) {
        qs = querystring.stringify(params)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path:path, method:method}, this.clientOptions);
}