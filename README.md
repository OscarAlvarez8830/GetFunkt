# GetFunkt Take 2

[Heroku link](http://getfunkt.herokuapp.com/)

## Minimum Viable Product

GetFunkt is a web application inspired by SoundCloud that will be built using Ruby on Rails and React.js.
By the end of week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Songs
  - [x] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Clean CSS styling for a polished look
- [ ] Stream and Discover feeds
  - [x] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Likes
  - [x] Provide a way to populate the Stream and Discover feeds
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
- [x] Continuous Play while Navigating the site
- [x] Song CRUD
  - [x] Song upload form for users


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
- [x] set up flux cycle for frontend auth
- [x] user signup/signin components
- [x] blank landing component after signin
- [x] style signin/signup components
- [x] seed users

### Phase 2: Song Model, API, and components (3 days, W2 M 6pm)

**Objective:** Songs can be created, read, edited and destroyed through
the API.

- [x] create `Song` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for songs (`SongsController`)
- [x] jBuilder views for songs
- [x] test out API interaction in the console.
- implement each song component, building out the flux loop as needed.
  - [x] `SongsIndex`
  - [x] `SongIndexItem`
- [x] implement music player
- [x] add album art to songs
- [x] style songs components
- [x] seed songs


### Phase 3: Likes, Stream and Discover (2 days, W2 W 6pm)

**Objective:** Likes provide a way to populate Stream and Discover feeds

- [x] create `Like` model
- build out API, Flux loop, and components for:
  - [x] Like, Stream, and Discover CRUD
  - [x] liking a song will add it to your Stream
  - [x] songs not already liked will be in your Discover feed
  - [x] viewing songs by feed
- [ ] Use CSS to style new components
- [ ] Seed Likes

Phase 3 adds organization to the Songs. Songs are organized by whether the current user likes them, which populates song 'Index' view.

### Phase 4: Comments (1 day, W2 Th 6pm)

**Objective:** Songs can have multiple comments.

- [ ] create `Comment` model
- build out API, Flux loop, and components for:
  - [ ] fetching comments for songs
  - [ ] adding comments to songs
- [ ] Style new elements
- [ ] Seed comments

### Phase 5: Add Song Upload form, Clean Up Styling (1 day, W2 F 6pm)

**objective:** Give users a song upload form, make sure all previous styling works together, animate user interactions.

- [x] Create form for uploading songs
- [x] Ensure uploaded songs are saved in database
- [ ] Create new users, upload songs, and stress-test for slow performance and style clashes
- [ ] Make the whole thing PRETTY

### Bonus: Add Waveform

**objective:** Implement waveform visuals for songs.
- [ ] Link songs to waveform generator API
- [ ] Build out API, Flux loop, and components for rendering the waveform



[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
[phase-six]: docts/phases/phase6.md
