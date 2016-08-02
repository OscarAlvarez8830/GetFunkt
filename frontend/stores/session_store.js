const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _currentUserHasBeenFetched = false;

function _login(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
  SessionStore.__emitChange();
}

function _logout() {
  _currentUser = {};
  _currentUserHasBeenFetched = false;
  SessionStore.__emitChange();
}

// CHECK possibly need methods for dealing with a user's songs, playlists, favorites

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      break;
    case SessionConstants.LOGOUT:
      _logout();
      break;
  }
};

SessionStore.currentUser = () => {
  return Object.assign({}, _currentUser); // returns a copy of _currentUser
};

SessionStore.currentUserHasBeenFetched = () => {
  return !!_currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = () => {
  return !!_currentUser.id;
};

module.exports = SessionStore;
