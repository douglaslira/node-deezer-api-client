var should = require('chai').should();
var deezer = require('../index');

describe('#album', function() {

  it('should returns album information for required album id', function() {
    deezer.album(1).should.equal('test');
  });

});
