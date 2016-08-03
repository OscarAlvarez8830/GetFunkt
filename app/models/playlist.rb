class Playlist < ActiveRecord::Base

  validates :user_id, :title, presence: true

  has_many(
    :playlistsongs,
    class_name: 'PlayListSong',
    primary_key: :id,
    foreign_key: :playlist_id
  )

  has_many(
    :songs,
    through: :playlistsongs,
    source: :song
  )

  belongs_to :user

end
