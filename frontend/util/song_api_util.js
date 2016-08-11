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
  },

  createSong(formData, successCB) {
    $.ajax({
      url: 'api/songs',
      method: 'POST',
      dataType: 'JSON',
      contentType: false,
      processData: false,
      data: formData,
      success: () => {
        successCB();
      },
      error: (error) => {
        console.log(error.responseText);
      }
    });
  },

  updateSong(songId, formData, successCB) {
    $.ajax({
      url: `api/songs/${songId}`,
      method: 'PATCH',
      dataType: 'JSON',
      contentType: false,
      processData: false,
      data: formData,
      success: (song) => {
        successCB(song);
      },
      error: (error) => {
        console.log(error.responseText);
      }
    });
  },

  deleteSong(songId, successCB) {
    $.ajax({
      url: `api/songs/${songId}`,
      method: 'DELETE',
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
