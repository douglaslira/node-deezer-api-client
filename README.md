node-deezer-api-client
=================

Node js wrapper for deezer api - http://developers.deezer.com/api/ supports
all GET methods which don't need OAuth authentication

### Usage

npm install node-deezer-api-client

### Artist examples

```javascript

var deezer = require('node-deezer-api-client');

var daftPunkArtistId = 27;

// get Daft Punk - http://api.deezer.com/artist/27
deezer.artist(daftPunkArtistId, function(artist) {
  console.log(artist.name);
});

// get Daft Punk albums - http://api.deezer.com/artist/27/albums
deezer.artistAlbums(daftPunkArtistId, function(albums) {
  console.log(albums.data);
});

// get Daft Punk fans - http://api.deezer.com/artist/27/fans
deezer.artistFans(daftPunkArtistId, function(fans) {
  console.log(fans.data);
});
