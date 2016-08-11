class Comment < ActiveRecord::Base

  validates :song_id, :user_id, :body, presence: true

  belongs_to :song
  belongs_to :user

  def formatted_date
    self.created_at.localtime.rfc2822
  end

end
