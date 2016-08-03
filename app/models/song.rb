class Song < ActiveRecord::Base

  validates :title, :artist, :user_id, presence: true

  has_attached_file :audio
  validates_attachment_content_type(:audio, content_type: /\Aaudio/\/.*\Z/)

  belongs_to :user

  has_many(
    :songplaylists,
    class_name: 'PlaylistSongs',
    primary_key: :id,
    foreign_key: :song_id
  )

  has_many(
    :playlists,
    through: :playlistsongs,
    source: :playlist
  )

  has_many :comments, dependent: :destroy

end
