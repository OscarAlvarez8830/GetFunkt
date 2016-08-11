const AppDispatcher = require('../dispatcher/dispatcher');
const CommentApiUtil = require('../util/comment_api_util');

const CommentActions = {

  fetchIndex(songId) {
    CommentApiUtil.fetchIndex(songId, CommentActions.receiveComments);
  },

  receiveComments(comments) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  createComment(comment) {
    CommentApiUtil.createComment(comment, CommentActions.receiveNewComment);
  },

  receiveNewComment(comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  deleteComment(commentId) {
    CommentApiUtil.deleteComment(commentId, CommentActions.removeComment);
  },

  removeComment(comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.REMOVE_COMMENT,
      comment: comment
    });
  }

};

module.exports = CommentActions;
