const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SongConstants = require('../constants/song_constants');

const SongStore = new Store(AppDispatcher);

let _songs = {};

SongStore.all = function () {
  const songs = [];
  for (let key in _songs) {
    songs.push(_songs[key]);
  }
  return songs;
};

SongStore.resetSongs = function (songs) {
  _songs = {};
  songs.forEach((song) => {
    _songs[song.id] = song;
  });
  SongStore.__emitChange();
};

SongStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SongConstants.SONGS_RECEIVED:
      SongStore.resetSongs(payload.songs);
      break;
  }
};

module.exports = SongStore;
