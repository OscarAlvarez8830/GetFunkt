class Song < ActiveRecord::Base

  validates :title, :artist, :user_id, presence: true

  has_attached_file :audio, default_url: 'something.mp3'
  validates_attachment_content_type :audio,
    content_type: ['audio/mpeg', 'audio/mpg', 'audio/mp3', 'audio/mpeg3'],
    message: 'File must be mp3 format'

  belongs_to :user
  has_many(
    :songplaylists,
    class: 'PlaylistSongs',
    primary_key: :id,
    foreign_key: :song_id
  )

  has_many(
    :playlists,
    through: :playlistsongs,
    source: :playlist
  )

end
