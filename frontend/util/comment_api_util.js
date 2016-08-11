const CommentApiUtil = {

  fetchIndex(songId, successCB) {
    $.ajax({
      url: `api/comments`,
      method: 'GET',
      dataType: 'JSON',
      data: { song_id: songId },
      success: (comments) => {
        successCB(comments);
      },
      error: (error) => {
        console.log(error.responseText);
      }
    });
  },

  createComment(comment, successCB) {
    $.ajax({
      url: 'api/comments',
      method: 'POST',
      dataType: 'JSON',
      data: { comment },
      success: (comment) => {
        successCB(comment);
      },
      error: (error) => {
        console.log(error);
      }
    });
  },

  deleteComment(commentId, successCB) {
    $.ajax({
      url: `api/comments/${commentId}`,
      method: 'DELETE',
      dataType: 'JSON',
      success: (comment) => {
        successCB(comment);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

};

module.exports = CommentApiUtil;
