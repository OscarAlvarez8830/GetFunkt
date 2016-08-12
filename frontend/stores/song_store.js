const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SongConstants = require('../constants/song_constants');

const SongStore = new Store(AppDispatcher);

let _songs = {};
let _currentSong = {};

SongStore.all = function () {
  const songs = [];
  for (let key in _songs) {
    songs.push(_songs[key]);
  }
  return songs;
};

SongStore.getSong = function(songId) {
  return _songs[songId];
};

SongStore.resetSongs = function (songs) {
  _songs = {};
  songs.forEach((song) => {
    _songs[song.id] = song;
  });

  SongStore.__emitChange();
};

SongStore.playSong = function (song) {
  _currentSong = song;
  SongStore.__emitChange();
};

SongStore.clearCurrentSong = function () {
  _currentSong = {};
  SongStore.__emitChange();
};

SongStore.removeSong = function (song) {
  delete _songs[song.id];
  SongStore.__emitChange();
};

SongStore.updateSong = function (song) {
  _songs[song.id] = song;
  SongStore.__emitChange();
};

SongStore.currentSong = function () {
  return _currentSong;
};

SongStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SongConstants.SONGS_RECEIVED:
      SongStore.resetSongs(payload.songs);
      break;
    case SongConstants.SONG_RECEIVED:
      SongStore.playSong(payload.song);
      break;
    case SongConstants.CLEAR_SONG:
      SongStore.clearCurrentSong();
      break;
    case SongConstants.REMOVE_SONG:
      SongStore.removeSong(payload.song);
      break;
    case SongConstants.SONG_UPDATE_RECEIVED:
      SongStore.updateSong(payload.song);
      break;
  }
};

module.exports = SongStore;
