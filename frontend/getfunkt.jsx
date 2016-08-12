import { Router, Route, IndexRoute, Link } from 'react-router';

const History = require('./history');
const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal');
const App = require('./components/app');
const LoginPage = require('./components/login_page');
const SessionActions = require('./actions/session_actions');
const SessionStore = require('./stores/session_store');
const SongsIndex = require('./components/songs_index');
const SongActions = require('./actions/song_actions');
const SongForm = require('./components/song_form');
const FeedIndex = require('./components/feed_index');


const appRouter = (
  <Router history={History}>
    <Route path="/" onEnter={_ensureLoggedIn} component={App} >

      <Route path="feeds" onEnter={fetchIndex.bind(null, 'stream')} component={FeedIndex} >
        <IndexRoute onEnter={fetchIndex.bind(null, 'stream')} component={SongsIndex} />
        <Route path="/stream" onEnter={fetchIndex.bind(null, 'stream')} component={SongsIndex} />
        <Route path="/discover" onEnter={fetchIndex.bind(null, 'discover')} component={SongsIndex} />
        <Route path="/usersongs/:userName" onEnter={fetchUserSongs} component={SongsIndex} />
      </Route>
      <Route path="/upload" component={SongForm} />

    </Route>

    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={LoginPage} />
  </Router>
);

function fetchUserSongs(props) {
  SongActions.fetchUserSongs(props.params.userName);
}

function fetchIndex(indexType) {
  // debugger
  SongActions.fetchIndex(indexType);
}

// onEnter hook to redirect if not logged in
function _ensureLoggedIn(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/login');
  }
}


document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(appRouter, root);
});
