class Song < ActiveRecord::Base

  validates :title, :artist, :user_id, presence: true

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: ['application/mp3', 'application/x-mp3', 'audio/mpeg', ['audio/mpeg'], 'audio/mp3']

  has_attached_file :image, default_url: "missing.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user

  has_many :likes
  has_many(
    :user_likes,
    through: :likes,
    source: :user
  )

  has_many :comments, dependent: :destroy

end
