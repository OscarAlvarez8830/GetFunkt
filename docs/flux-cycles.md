# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. sets `form` and `_errors` in the `ErrorStore`
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. removes `_errors` for a given `form` in the `ErrorStore`

## Song Cycles

### Songs API Request Actions

* `fetchAllSongs`
  0. invoked from `SongsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/songs` is called.
  0. `receiveAllSongs` is set as the success callback.

* `createSong`
  0. invoked from song upload button `onClick`
  0. `POST /api/songs` is called.
  0. `receiveSingleSong` is set as the success callback.

* `fetchSingleSong`
  0. invoked from `SongIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/songs/:id` is called.
  0. `receiveSingleSong` is set as the success callback.

* `destroySong`
  0. invoked from delete song button `onClick`
  0. `DELETE /api/songs/:id` is called.
  0. `removeSong` is set as the success callback.

### Songs API Response Actions

* `receiveAllSongs`
  0. invoked from an API callback.
  0. `Song` store updates `_songs` and emits change.

* `receiveSingleSong`
  0. invoked from an API callback.
  0. `Song` store updates `_songs[id]` and emits change.

* `removeSong`
  0. invoked from an API callback.
  0. `Song` store removes `_songs[id]` and emits change.

### Store Listeners

* `SongsIndex` component listens to `Song` store.
* `SongComments` component listens to `Song` store.


## Playlist Cycles

### Playlists API Request Actions

* `fetchAllPlaylists`
  0. invoked from `PlaylistsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/playlists` is called.
  0. `receiveAllPlaylists` is set as the success callback.

* `createPlaylist`
  0. invoked from new playlist button `onClick`
  0. `POST /api/playlists` is called.
  0. `receiveSinglePlaylist` is set as the callback.

* `fetchSinglePlaylist`
  0. invoked from `PlaylistDetail` `didMount`/`willReceiveProps`
  0. `GET /api/playlists/:id` is called.
  0. `receiveSinglePlaylist` is set as the success callback.

* `updatePlaylist`
  0. invoked from `PlaylistForm` `onSubmit`
  0. `POST /api/playlists` is called.
  0. `receiveSinglePlaylist` is set as the success callback.

* `destroyPlaylist`
  0. invoked from delete playlists button `onClick`
  0. `DELETE /api/playlists/:id` is called.
  0. `removePlaylist` is set as the success callback.

### Playlists API Response Actions

* `receiveAllPlaylists`
  0. invoked from an API callback.
  0. `Playlist` store updates `_playlists` and emits change.

* `receiveSinglePlaylist`
  0. invoked from an API callback.
  0. `Playlist` store updates `_playlists[id]` and emits change.

* `removePlaylist`
  0. invoked from an API callback.
  0. `Playlist` store removes `_playlists[id]` and emits change.

### Store Listeners

* `PlaylistsIndex` component listens to `Playlist` store.


<!-- ## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SongSearchBar` `onChange` when there is text
  0. `GET /api/songs` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `SongSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store. -->
