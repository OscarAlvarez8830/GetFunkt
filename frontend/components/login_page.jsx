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

  render() {
    return (
      <div>

        <header>
          <img id="welcome-image group"
            src={GetFunktAssets.welcomeImage2}
            height="auto"
            width="100%"
            >
          </img>
          <div className="welcome-link">
            <Link to="/"><h1>GetFunkt</h1></Link>
            <h4 className="tagline">Music For You, By You</h4>
          </div>
        </header>

        <section className="auth-buttons">
          <div>
            <nav className="login-signup">
              <button id="login" onClick={this._handleClick.bind(this, true)}>Login </button>
              <button id="signup" onClick={this._handleClick.bind(this, false)}>Create Account</button>
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
