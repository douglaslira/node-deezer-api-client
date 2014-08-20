var should = require('chai').should();
var deezer = require('../index');

describe('#album', function() {

  it('should returns album information for required album id', function(done) {
    deezer.album(1, function(error, response) {
      response.id.should.equal(1);
      response.title.should.equal('1');
      response.artist.name.should.equal('The Beatles');
      done();
    });
  });

  it('should returns comments for required album id', function(done) {
    deezer.albumComments(1, function(error, response) {
      response.data.should.exist;
      done();
    });
  });

  it('should returns fans for required album id', function(done) {
    deezer.albumFans(1, function(error, response) {
      response.data.should.exist;
      done();
    });
  });

  it('should returns tracks for required album id', function(done) {
    deezer.albumTracks(1, function(error, response) {
      response.data.should.exist;
      done();
    });
  });

  it('should returns artist information for required artist id', function(done) {
    deezer.artist(1, function(error, response) {
      response.id.should.equal(1);
      response.name.should.equal('The Beatles');
      done();
    });
  });

  it('should returns the top 5 tracks of an artist id', function(done) {
    deezer.artistTop(1, function(error, response) {
      response.data.should.exist;
      done();
    });
  });

  it('should returns a list of artist albums', function(done) {
    deezer.artistAlbums(1, function(error, response) {
      response.data.should.exist;
      done();
    });
  });

  it('should returns a list of artist comments', function(done) {
    deezer.artistComments(1, function(error, response) {
      response.data.should.exist;
      done();
    });
  });

  it('should returns a list of artist fans', function(done) {
    deezer.artistFans(1, function(error, response) {
      response.data.should.exist;
      done();
    });
  });

  it('should returns a list of artist related', function(done) {
    deezer.artistRelated(1, function(error, response) {
      response.data.should.exist;
      done();
    });
  });

  it('should returns a list of artist radio', function(done) {
    deezer.artistRadio(1, function(error, response) {
      response.data.should.exist;
      done();
    });
  });

  it('should return a track information for required track id', function(done) {
    deezer.track(3135556, function(error, response) {
      response.title.should.equal('Harder Better Faster Stronger');
      done();
    });
  });

});
