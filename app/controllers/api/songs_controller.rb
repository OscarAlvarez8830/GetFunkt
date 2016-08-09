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
    # debugger
    liked_songs = current_user.liked_songs
    songs = current_user.songs
    # debugger
    @songs = liked_songs + songs
    render :index
  end

  def discover
    # songs that don't have current_user as a liker
    # *Song* has_many :user_likes, through: :likes
    # *User* has_many :liked_songs, through: :likes
    # @songs = Song.joins(:likes).where.not(likes: { user_id: current_user.id } )
    @songs = Song.where.not(user_id: current_user.id)
    # @songs = songs.where.not(song: current_user.liked_songs)
    # @songs = songs.joins('LEFT OUTER JOIN like')
      # .where.not(likes: {user_id: current_user.id})
    # CHECK!! this query may be wrong
    # test when you have components live
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
    params.require(:song).permit(:title, :artist, :user_id, :audio)
  end

end
