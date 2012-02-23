//Core
var querystring = require('querystring'),
    MemeItClient = require('../memeItClient.js')

MemeItClient.prototype.getStream = function (id, params) {
    var methodClientOptions = this.clientOptions
    return this.basicCall('/streams/' + id, 'GET', params, methodClientOptions)
}


MemeItClient.prototype.createStream = function (streamObj, params) {
    var methodClientOptions = this.clientOptions
    var path = '/streams'
    return this.createCall({path:path, method:'POST', data:JSON.stringify(streamObj)}, this.clientOptions);

}