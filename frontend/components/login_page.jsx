const React = require('react');
const LoginForm = require('./login_form');
const SessionStore = require('../stores/session_store');
const Modal = require('react-modal');
const ModalStyle = require('../modal_style');
const Link = require('react-router').Link;

const LoginPage = React.createClass({

  getInitialState() {
    return({ modalOpen: false, logIn: false });
  },

  _handleClick(bool) {
    this.setState({ modalOpen: true, logIn: bool });
  },

  onModalClose() {
    this.setState({ modalOpen: false });
  },

  greeting() {
    if (!SessionStore.currentUserHasBeenFetched()) {
      return (
        <div>
          <nav className="login-signup">
            <button onClick={this._handleClick.bind(this, true)}>Login </button>
            <button onClick={this._handleClick.bind(this, false)}>Sign Up</button>
          </nav>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            >
            <LoginForm formType={this.state.logIn ? 'login' : 'signup'}/>
          </Modal>
        </div>
      );
    }
  },

  render() {
    return (
      <div>

        <header>
          <Link to="/" className="header-link"><h1>GetFunkt</h1></Link>
          <h4>Music For You, By You</h4>
        </header>

        <section className="auth-buttons">
          <div>
            <nav className="login-signup">
              <button onClick={this._handleClick.bind(this, true)}>Login </button>
              <button onClick={this._handleClick.bind(this, false)}>Sign Up</button>
            </nav>
            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.onModalClose}
              style={ModalStyle}
              >
              <LoginForm formType={this.state.logIn ? 'login' : 'signup'}/>
            </Modal>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = LoginPage;
