class Comment < ActiveRecord::Base

  validates :song_id, :user_id, :body, presence: true

  belongs_to :song
  belongs_to :user

end
