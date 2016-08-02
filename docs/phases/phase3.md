# Phase 3: Playlists (2 days, W2 Tu 6pm)

## Rails
### Models
* Playlist
* Comment
* SongComment

### Controllers
* Api::PlaylistsController (create, destroy, index, show, update)

### Views
* playlists/index.json.jbuilder
* playlists/show.json.jbuilder

## Flux
### Views (React Components)
* PlaylistsIndex
  - PlaylistIndexItem
* PlaylistForm

### Stores
* Playlist

### Actions
* `ApiActions.receiveAllPlaylists`
* `ApiActions.receiveSinglePlaylist`
* `ApiActions.deletePlaylist`
* `PlaylistActions.fetchAllPlaylists`
* `PlaylistActions.fetchSinglePlaylist`
* `PlaylistActions.createPlaylist`
* `PlaylistActions.editPlaylist`
* `PlaylistActions.destroyPlaylist`

### ApiUtil
* `ApiUtil.fetchAllPlaylists`
* `ApiUtil.fetchSinglePlaylist`
* `ApiUtil.createPlaylist`
* `ApiUtil.editPlaylist`
* `ApiUtil.destroyPlaylist`

## Gems/Libraries
