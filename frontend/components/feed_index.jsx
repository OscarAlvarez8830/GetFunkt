const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');

const FeedIndex = React.createClass({

  getInitialState() {
    const feed = this.props.location.pathname.slice(1);
    return({feed: feed});
  },

  componentWillReceiveProps(newProps) {
    this.setState({feed: newProps.location.pathname.slice(1)});
  },

  streamAndDiscover() {
    if (['stream', 'discover'].includes(this.state.feed)) {
      return (
        <ul className="feed-list">
          <li className="feed-list-item">
            <Link to="/stream">Stream</Link>
          </li>
          <li className="feed-list-item">
            <Link to="/discover">Discover</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <h3 className="feed-list">{this.state.feed.slice(10)}'s Music</h3>
      );
    }
  },

  render() {
    return (
      <div className="feed-index">
        {this.streamAndDiscover()}
        {this.props.children}
      </div>
    );
  }
});

module.exports = FeedIndex;
