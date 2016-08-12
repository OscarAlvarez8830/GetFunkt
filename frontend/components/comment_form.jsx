const React = require('react');
const CommentActions = require('../actions/comment_actions');
const CommentStore = require('../stores/comment_store');

const CommentForm = React.createClass({

  getInitialState() {
    return ({ body: "" });
  },

  handleBody(e) {
    this.setState({ body: e.currentTarget.value });
  },

  handleSubmit(e) {
    e.preventDefault();

    CommentActions.createComment({
      body: this.state.body,
      song_id: this.props.songId
    });
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        <textarea
          className="comment-form-body"
          onChange={this.handleBody}
          value={this.state.body}
          />

        <input type="submit" className="comment-submit submit" value="Add Comment" />
      </form>
    );
  }
});

module.exports = CommentForm;
