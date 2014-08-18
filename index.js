var http = require('http');
var request = require('request');
var async = require('async');

module.exports = {

  album: function(albumId, callback) {

    async.waterfall([

      function(callback){

        request('http://api.deezer.com/album/' + albumId, function(error, response, body) {
          callback(null, JSON.parse(body));
        });

      }

    ], function (err, result) {
      callback(result);
    });

  }

}
