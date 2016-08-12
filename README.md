# GetFunkt

[GetFunkt live](http://getfunkt.herokuapp.com)

GetFunkt is a full-stack web application inspired by SoundCloud. The backend is built with Ruby on Rails; the database is PostgreSQL, and the frontend is done in React.js with a Flux framework.

## Features & Implementation

GetFunkt is a single-page app, which allows for seamless audio playback throughout navigation. The audio player is rendered in the parent component, allowing other components to render without disrupting the user experience.

### Song Rendering and CRUD

  In the database, `Songs` are stored in one table, with a `user_id` column denoting the owner of the song (i.e. the user that uploaded it to the site). Each `Song` object has an audio file and an image file (album art), making combined use of Paperclip, Figaro, and Amazon Web Services.

  Upon login, the router redirects to the user's `Stream`, which is an index of songs that either belong to the user or that the user has `liked`. From there, the user may navigate to the `Discover` feed, which, for the purposes of this small-scale demo, is every song in the database that the current user does not own or does not currently like. This can be easily scaled by returning a small number of randomly chosen songs, by returning songs based on a shared attribute (such as artist or genre), or by returning songs from users that the current user follows.

  Users may also visit other users' pages, which list the songs that that user has uploaded.

  Songs may be uploaded via the `Upload` link at the top of the page. Users must input a title, artist, audio file, and image file to successfully upload a song to GetFunkt.

  Users may also edit and delete their own songs directly in their Stream.

  Users can play a song by clicking on its album art, title, or artist. Songs can be switched simply by clicking another song. The basic audio controller at the bottom of the page provides play, pause, tracking, and volume capabilities.

### Other Features to Implement

  In the future, I'd like to implement user following, search functionality (directly searching by song title, as well as by artist/user/tag/genre), and waveforms. Most of this can be done with no further tools than the app already makes use of, but for waveforms I plan to either use an external JS library or use Canvas.
