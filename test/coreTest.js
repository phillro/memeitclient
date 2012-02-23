assert = require('assert');
MemeItClient = require('../lib/memeitclient/memeItClient.js');
var serverOptions = {
    host:'localhost',
    port:3000
};


var memeItClient = new MemeItClient(serverOptions);


testGetStream = function () {
    memeItClient.getStream(1, {})
        .on('data', function (data) {
            console.log(data);
        })
        .exec()
}

testCreateStream = function () {
    memeItClient.createStream({name:'a stream name', terms:['@some_name', '#some_topic']})
        .on('data', function (data) {
            console.log(data);
        })
        .exec()
}


testCreateStream()