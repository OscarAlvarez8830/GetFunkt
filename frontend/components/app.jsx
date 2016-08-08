const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const History = require('../history');

const App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut() {
    SessionActions.logOut();
    History.push("/");
  },

  greeting() {
    if (SessionStore.currentUserHasBeenFetched()) {
      return (
        <button onClick={this._handleLogOut}>Log Out</button>
      );
    } else {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login </Link>
          <Link to="/signup" activeClassName="current">Sign Up</Link>
        </nav>
      );
    }
  },

  render() {
    return (
      <div>
        <section id="auth-buttons">
          { this.greeting() }
        </section>

        <header>
          <Link to="/" className="header-link"><h1>GetFunkt</h1></Link>
          <h4>Music For You, By You</h4>
        </header>
        { this.props.children }
      </div>
    );
  }

});

module.exports = App;
