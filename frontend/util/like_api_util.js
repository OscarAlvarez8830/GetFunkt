const LikeApiUtil = {
  createLike(songId, successCB) {
    $.ajax({
      url: 'api/likes',
      method: 'POST',
      dataType: 'JSON',
      data: { songId },
      success: (like) => {
        successCB(like);
      },
      error: (error) => {
        console.log(error.responseText);
      }
    });
  },

  deleteLike(songId, successCB) {
    $.ajax({
      url: 'api/likes',
      method: 'DELETE',
      dataType: 'JSON',
      data: { songId },
      success: (like) => {
        successCB(like);
      },
      error: (error) => {
        console.log(error.responseText);
      }
    });
  }
};

module.exports = LikeApiUtil;
