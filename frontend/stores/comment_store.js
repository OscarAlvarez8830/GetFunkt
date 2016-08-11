const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const CommentConstants = require('../constants/comment_constants');

const CommentStore = new Store(AppDispatcher);

let _comments = {};

CommentStore.all = function () {
  let comments = [];
  for (let key in _comments) {
    comments.push(_comments[key]);
  }
  return comments;
};

CommentStore.resetComments = function (comments) {
  _comments = {};
  comments.forEach((comment) => {
    _comments[comment.id] = comment;
  });
  CommentStore.__emitChange();
};

CommentStore.addComment = function (comment) {
  _comments[comment.id] = comment;
  CommentStore.__emitChange();
};

CommentStore.removeComment = function (comment) {
  delete _comments[comment.id];
  CommentStore.__emitChange();
};

CommentStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case CommentConstants.COMMENTS_RECEIVED:
      CommentStore.resetComments(payload.comments);
      break;
    case CommentConstants.COMMENT_RECEIVED:
      CommentStore.addComment(payload.comment);
      break;
    case CommentConstants.REMOVE_COMMENT:
      CommentStore.removeComment(payload.comment);
      break;
  }
};

module.exports = CommentStore;
