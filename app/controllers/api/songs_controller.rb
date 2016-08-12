class Api::SongsController < ApplicationController

  def create
    @song = Song.new(song_params)
    if @song.save
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end

  end

  def show
    @song = Song.find(params[:id].to_i)
  end

  def stream
    liked_songs = current_user.liked_songs
    songs = current_user.songs
    @songs = liked_songs + songs
    render :index
  end

  def discover
    @songs = Song.where.not(
      user_id: current_user.id,
      id: current_user.liked_songs.pluck(:id)
    )

    render :index
  end

  def usersongs
    # @songs = Song.where(user_id: params[:user_id])
    user = User.find_by(username: params[:username])
    @songs = Song.where(user: user)

    render :index
  end

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
    params.require(:song).permit(:title, :artist, :user_id, :audio, :image)
  end

end
