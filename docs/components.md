## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Navbar
  * PlaylistsIndex
    * Search
    * PlaylistIndexItem
    * PlaylistForm
  * **LoginForm**
  * **SignupForm**
  * **SongsIndex**
    * SongForm
    * SongIndexItem
    * **SongComments**
      * SongCommentsItem
      * SongCommentForm



## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** /login
  * **component** `SignupForm` **path:** /signup
  * **component:** `SongsIndex` **path:** index
  * **component:** `SongsIndex` **path:** `playlists/:playlistId`
    * **component:** `SongComments` **path:** `songs/:songId`
  * **component:** `SongsIndex` **path:** none
    * **component:** `SongComments` **path:** `songs/:songId`

For Routes that have no `playlistId`, `SongsIndex` will render all
songs.
