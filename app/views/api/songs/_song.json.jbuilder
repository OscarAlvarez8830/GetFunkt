json.extract! song, :title, :artist, :id, :user_id

# CHECK!! audio file stuff
json.audio_url asset_path(song.audio.url)
# also going to need song art for each song
json.image_url asset_path(song.image.url)

# CHECK!! should have some more information displayed
