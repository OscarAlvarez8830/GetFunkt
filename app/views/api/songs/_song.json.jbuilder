json.extract! song, :title, :artist, :id, :user_id, :user

json.audio_url asset_path(song.audio.url)
json.image_url asset_path(song.image.url)
