# Phase 2: Flux Architecture and Song CRUD (2 days, W1 Th 6pm)

## Rails
### Models
* Song

### Controllers
* Api::SongsController (create, destroy, index, show, update)

### Views
* songs/index.json.jbuilder
* songs/show.json.jbuilder

## Flux
### Views (React Components)
* SongsIndex
  - SongsIndexItem
* SongForm

### Stores
* Song

### Actions
* `ApiActions.receiveAllSongs`
* `ApiActions.receiveSingleSong`
* `ApiActions.deleteSong`
* `SongActions.fetchAllSongs`
* `SongActions.fetchSingleSong`
* `SongActions.createSong`
* `SongActions.editSong`
* `SongActions.destroySong`

### ApiUtil
* `ApiUtil.fetchAllSongs`
* `ApiUtil.fetchSingleSong`
* `ApiUtil.createSong`
* `ApiUtil.editSong`
* `ApiUtil.destroySong`

## Gems/Libraries
