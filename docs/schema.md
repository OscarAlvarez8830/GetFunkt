# Schema Information

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
artist      | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
playlist_id | integer   | not null, foreign key (references playlists), indexed
<!-- Do I need anything else for music files?  -->

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null

## playlistsongs

column name | data type | details
------------|-----------|-----------------------
song_id     | integer   | not null, foreign key (references songs), indexed
playlist_id | integer   | not null, foreign key (references playlists), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
