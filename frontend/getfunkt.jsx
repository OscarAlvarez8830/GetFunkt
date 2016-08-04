import { Router, Route, IndexRoute, Link } from 'react-router';

const History = require('./history');
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/app');
const LoginForm = require('./components/login_form');
const SessionStore = require('./stores/session_store');
const SongsIndex = require('./components/songs_index');
const SongActions = require('./actions/song_actions');


const routes = (
  <Route path="/" component={App} >
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={LoginForm} />
    <Route path="/stream" onEnter={fetchIndex.bind(null, 'stream')} component={SongsIndex} />
    <Route path="/discover" onEnter={fetchIndex.bind(null, 'discover')} component={SongsIndex} />
  </Route>
);

function fetchIndex(indexType) {
  SongActions.fetchIndex(indexType);
}

// onEnter hook to redirect if not logged in
function _ensureLoggedIn(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/login');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Router history={History} routes={routes} />, root);
});
