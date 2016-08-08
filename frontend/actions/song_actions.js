const SongConstants = require('../constants/song_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const SongApiUtil = require('../util/song_api_util');

const SongActions = {
  // fetchStream() {
  //   SongApiUtil.fetchStream(SongActions.receiveSongs);
  // },
  //
  // fetchDiscover() {
  //   SongApiUtil.fetchDiscover(SongActions.receiveSongs);
  // },

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
  }
};

module.exports = SongActions;
