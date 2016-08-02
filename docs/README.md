# GetFunkt

# Link

## Minimum Viable Product

GetFunkt is a web application inspired by SoundCloud that will be built using Ruby on Rails and React.js.
By the end of week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Songs
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Clean CSS styling for a polished look
- [ ] Playlists
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] User Pages
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Continuous Play while Navigating the site
- [ ] Song CRUD


## Design Docs

* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with front-end Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication backend setup
- [x] create `StaticPages` controller and root view
- [x] set up webpack & flux scaffold with skeleton files
- [x] setup `APIUtil` to interact with the API
- [ ] set up flux cycle for frontend auth
- [ ] user signup/signin components
- [ ] blank landing component after signin
- [ ] style signin/signup components
- [x] seed users

### Phase 2: Song Model, API, and components (2 days, W1 Th 6pm)

**Objective:** Songs can be created, read, edited and destroyed through
the API.

- [ ] create `Song` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`SongsController`)
- [ ] jBuilder views for songs
- [ ] test out API interaction in the console.
- implement each song component, building out the flux loop as needed.
  - [ ] `SongsIndex`
  - [ ] `SongIndexItem`
  - [ ] `SongForm`
- [ ] save Songs to the DB on submit
- [ ] implement music player
- [ ] style songs components
- [ ] seed songs

### Phase 3: Playlists (2 days, W2 Tu 6pm)

**Objective:** Songs belong to Playlists, and can be viewed by playlist.

- [ ] create `Playlist` model
- build out API, Flux loop, and components for:
  - [ ] Playlist CRUD
  - [ ] adding songs defaults to a user's library (home playlist)
  - [ ] songs can be directly added to one or more playlists upon creation
  - [ ] moving songs to a different playlist
  - [ ] viewing songs by playlist
- [ ] Use CSS to style new components
- [ ] Seed Playlists

Phase 3 adds organization to the Songs. Songs belong to a Playlist,
which has its own `Index` view.

### Phase 4: Comments (1 day, W2 W 6pm)

**Objective:** Songs can have multiple comments.

- [ ] create `Comment` model
- build out API, Flux loop, and components for:
  - [ ] fetching comments for songs
  - [ ] adding comments to songs
- [ ] Style new elements
- [ ] Seed comments

### Phase 5: Add Favorites Playlist and WaveForm (1 days, W2 Th 6pm)

**objective:** Give users a favorites playlist and implement waveform visuals for songs.

- [ ] Give users an empty favorites playlist by default
- [ ] Build out API, Flux loop, and components for adding songs to favorites playlist
- [ ] Link songs to waveform generator API
- [ ] Build out API, Flux loop, and components for rendering the waveform

### Phase 6: Clean Up Styling and Add Animation (1 day, W2 F 6pm)

**objective:** Make sure all previous styling works together; animate user interactions.

- [ ] Create new users, upload songs, and stress-test for slow performance and style clashes
- [ ] Animate common actions (adding to playlist, removing from playlist, music player console)

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
[phase-six]: docts/phases/phase6.md
