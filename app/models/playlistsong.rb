class PlayListSong < ActiveRecord::Base

  validates :song_id, :playlist_id, presence: true

  belongs_to :song
  belongs_to :playlist

end
