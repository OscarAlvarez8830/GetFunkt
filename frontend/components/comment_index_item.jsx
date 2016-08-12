const React = require('react');
const CommentActions = require('../actions/comment_actions');
const CommentStore = require('../stores/comment_store');
const SessionStore = require('../stores/session_store');

const CommentIndexItem = React.createClass({

  deleteButton() {
    if (this.props.comment.user.id === SessionStore.currentUser().id) {
      return (
        <button className="comment-delete" onClick={this.deleteComment}>
          Delete
        </button>
      );
    }
  },

  deleteComment(e) {
    e.preventDefault();
    CommentActions.deleteComment(this.props.comment.id);
  },

  render() {

    return (
      <div className="comment-item">
        <p className="comment-body">{this.props.comment.body}</p>
        <p className="comment-author">{this.props.comment.user.username}</p>
        <p className="comment-time">{this.props.comment.formatted_date}</p>

        {this.deleteButton()}
      </div>
    );
  }
});

module.exports = CommentIndexItem;
