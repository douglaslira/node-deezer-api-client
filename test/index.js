var should = require('chai').should();
var deezer = require('../index');

describe('#album', function() {

  it('should returns album information for required album id', function(done) {
    deezer.album(1, function(response) {
      response.artist.name.should.equal('The Beatles');
      done();
    });
  });

});
