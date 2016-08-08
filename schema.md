# Schema Information

## songs
column name     | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
title              | string    | not null
artist             | string    | not null
user_id            | integer   | not null, foreign key (references users), indexed
audio_file_name    | string    |
audio_content_type | string    |
audio_file_size    | integer   |
audio_updated_at   | datetime  |

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
song_id     | integer   | not null, foreign key (references songs), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
song_id     | integer   | not null, foreign key (references songs), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
