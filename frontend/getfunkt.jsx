import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/app');
const LoginForm = require('./components/login_form');

const routes = (
  <Route path="/" component={App} >
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={LoginForm} />
  </Route>
);

// onEnter hook to redirect if not logged in
function _ensureLoggedIn(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/login');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Router history={hashHistory} routes={routes} />, root);
});
