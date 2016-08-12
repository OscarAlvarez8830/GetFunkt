const SongConstants = require('../constants/song_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const SongApiUtil = require('../util/song_api_util');

const SongActions = {

  fetchIndex(indexType) {
    SongApiUtil.fetchIndex(indexType, SongActions.receiveSongs);
  },

  receiveSongs(songs){
    AppDispatcher.dispatch({
      actionType: SongConstants.SONGS_RECEIVED,
      songs: songs
    });
  },

  getSong(songId) {
    SongApiUtil.getSong(songId, SongActions.receiveCurrentSong);
  },

  receiveCurrentSong(song) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONG_RECEIVED,
      song: song
    });
  },

  updateSong(songId, formData) {
    SongApiUtil.updateSong(songId, formData, SongActions.receiveUpdatedSong);
  },

  receiveUpdatedSong(song) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONG_UPDATE_RECEIVED,
      song: song
    });
  },

  clearCurrentSong() {
    AppDispatcher.dispatch({
      actionType: SongConstants.CLEAR_SONG
    });
  },

  deleteSong(songId) {
    SongApiUtil.deleteSong(songId, SongActions.removeSong);
  },

  removeSong(song) {
    AppDispatcher.dispatch({
      actionType: SongConstants.REMOVE_SONG,
      song: song
    });
  },

  fetchUserSongs(userId) {
    SongApiUtil.fetchUserSongs(userId, SongActions.receiveSongs);
  },

  clearAllSongs() {
    AppDispatcher.dispatch({
      actionType: SongConstants.CLEAR_ALL_SONGS
    });
  }

};

module.exports = SongActions;
