const React = require('react');

const FeedIndex = React.createClass({

  getInitialState() {
    return({feed: 'stream'});
  },

  clickHandler(feedType) {
    this.setState( feedType === 'discover' ? 'discover' : 'stream');
  },

  render() {
    return (
      <div className="feed-index">
        <ul className="feed-list">
          <li className="feed-list-item" onClick={this.clickHandler.bind(null, 'stream')}>Stream</li>
          <li className="feed-list-item" onClick={this.clickHandler.bind(null, 'discover')}>Discover</li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

module.exports = FeedIndex;
