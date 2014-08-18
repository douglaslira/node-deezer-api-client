var should = require('chai').should();
var deezer = require('../index');

describe('#album', function() {

  it('should returns album information for required album id', function(done) {
    deezer.album(1, function(response) {
      response.id.should.equal(1);
      response.title.should.equal('1');
      response.artist.name.should.equal('The Beatles');
      done();
    });
  });

  it('should returns artist information for required artist id', function(done) {
    deezer.artist(1, function(response) {
      response.id.should.equal(1);
      response.name.should.equal('The Beatles');
      done();
    });
  });

});
