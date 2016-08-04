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

SongStore.__onDispatch = function (payload) {
  switch (payload.actionType) {

  }
};

module.exports = SongStore;
