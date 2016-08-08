const React = require('react');
const Link = require('react-router').Link;

const FeedIndex = React.createClass({

  getInitialState() {
    return({feed: 'stream'});
  },

  clickHandler(feedType) {
    this.setState( { feed: feedType === 'discover' ? 'discover' : 'stream' });
  },

  render() {
    return (
      <div className="feed-index">
        <ul className="feed-list">
          <li className="feed-list-item">
            <Link to="/stream">Stream</Link>
          </li>
          <li className="feed-list-item">
            <Link to="/discover">Discover</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

module.exports = FeedIndex;
