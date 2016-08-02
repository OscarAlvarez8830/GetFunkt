# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Songs

- `GET /api/songs`
  - Songs index/search
- `POST /api/songs`
- `GET /api/songs/:id`
- `PATCH /api/songs/:id`
- `DELETE /api/songs/:id`

### Playlists

- `GET /api/playlists`
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists/:id`
- `GET /api/playlists/:id/songs`
  - index of all songs for a playlist

### Comments

- A note's tags will be included in the note show template
- `GET /api/comments`
  - includes query param for typeahead suggestions
- `POST /api/songs/:song_id/comments`: add tag to song by name
- `DELETE /api/songs/:song_id/comments/:comment_id`
