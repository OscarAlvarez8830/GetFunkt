class User < ActiveRecord::Base

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :songs
  has_many :likes
  has_many(
    :liked_songs,
    through: :likes,
    source: :song
  )
  # has_many :comments # CHECK!! add in when comment model is up

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user && user.valid_password?(password)
      return user
    end
    nil
  end

  def self.generate_session_token
    token = SecureRandom::urlsafe_base64(16)
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64(16)
    end
    token
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def valid_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
