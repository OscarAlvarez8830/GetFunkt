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

  onModalOpen() {
    ModalStyle.content.opacity = 100;
  },

  onModalClose() {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
  },

  render() {
    return (
      <div>

        <header>
          <img
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
              onAfterOpen={this.onModalOpen}
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
