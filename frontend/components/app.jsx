const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut() {
    SessionActions.logOut();
  },

  greeting() {
    // CHECK!!
  },

  render() {
    return (
      <div>
        <header>
          <Link to="/" className="header-link"><h1>GetFunkt</h1></Link>
          <h4>Music For You, By You</h4>
        </header>
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
