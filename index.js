var http = require('http');
var request = require('request');
var async = require('async');

var deezerUrl = 'http://api.deezer.com/';

module.exports = {

  album: function(albumId, callback) {
    this.requestData('album/' + albumId, callback);
  },

  albumComments: function(albumId, callback) {
    this.requestData('album/' + albumId + "/comments", callback);
  },

  artist: function(artistId, callback) {
    this.requestData('artist/' + artistId, callback);
  },

  requestData: function(uri, callback) {

    async.waterfall([

      function(callback){

        request(deezerUrl + uri, function(error, response, body) {
          callback(null, JSON.parse(body));
        });

      }

    ], function (err, result) {
      callback(result);
    });


  }

}
