class SongsController < ApplicationController

  def create
    # CHECK!!
    # the form that reaches this should also handle adding to a playlist
    # that should reach the PlayListSongs controller to create the association

    @song = Song.new(song_params)

    if @song.save
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end

  end

  def stream
    user = User.find(params[:user_id])
    @songs = user.liked_songs
    # CHECK!! liked_songs means I need to implement likes
    # CHECK!! will need to specify order and such
  end

  def discover
    user = User.find(params[:user_id])

    # songs that don't have current_user as a liker
    # Likes will be a join table
    # belongs_to :user
    # belongs_to :song
    # *Song* has_many :likers, through: :likes
    # *User* has_many :liked_songs, through: :likes
    # @songs = Song.where()
  end

  # CHECK!! will probably need other methods to specify by playlists

  def update
    @song = Song.find(params[:id])

    if @song.user_id != current_user.id
      render json: ["Nuh uh. Can't edit someone else's track."]
    elsif @song.update(song_params)
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    # CHECK!!
    # the form will need another button that links to the destroy action in PlaylistSongs (to remove from playlist)
    # will have to update the playlist store and re-render upon change
    @song = Song.find(params[:id])
    if @song.user_id != current_user.id
      render json: ["Don't be a jerk. You can't delete someone else's song."], status: 422
    elsif @song
      @song.destroy
      render :show
    else
      render json: ["Track not found"], status: 422
    end
  end



  private

  def song_params
    params.require(:song).permit(:title, :artist, :user_id)
  end

end
