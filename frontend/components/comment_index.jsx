const React = require('react');
const CommentActions = require('../actions/comment_actions');
const CommentStore = require('../stores/comment_store');
const CommentIndexItem = require('./comment_index_item');

const CommentIndex = React.createClass({

  getInitialState() {
    return ({comments: CommentStore.all()});
  },

  componentDidMount() {
    this.listener = CommentStore.addListener(this.handleCommentChange);
    CommentActions.fetchIndex(this.props.songId);
  },

  handleCommentChange() {
    this.setState({comments: CommentStore.all()});
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  render() {
    return (
        <ul className="comment-index">
          {
            this.state.comments.map((comment) => {
              return <li key={comment.id}><CommentIndexItem comment={comment} /></li>;
            })
          }
        </ul>
    );
  }
});

module.exports = CommentIndex;
