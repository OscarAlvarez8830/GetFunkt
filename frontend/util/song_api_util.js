const SongApiUtil = {

  fetchIndex(feedType, successCB) {
    $.ajax({
      url: `api/${feedType}`,
      method: 'GET',
      dataType: 'JSON',
      success: (songs) => {
        successCB(songs);
      },
      error: (error) => {
        console.log(error.responseText);
        // CHECK!! properly handle errors
      }
    });
  },

  getSong(songId, successCB) {
    $.ajax({
      url: `api/songs/${songId}`,
      method: 'GET',
      dataType: 'JSON',
      success: (song) => {
        successCB(song);
      },
      error: (error) => {
        console.log(error.responseText);
      }
    });
  }

};

module.exports = SongApiUtil;
