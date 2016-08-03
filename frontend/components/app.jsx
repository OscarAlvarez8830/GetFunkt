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
    // CHECK!! this isn't rendering the way I'd like
    // logout button is showing up as soon as I render the login form
    if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login</Link>
          <Link to="/signup" activeClassName="current">Sign Up</Link>
        </nav>
      );
    } else {
      // need to see if someone is logged in or not
      return (
        <button onClick={this._handleLogOut}>Log Out</button>
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
