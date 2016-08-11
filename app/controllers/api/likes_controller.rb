class Api::LikesController < ApplicationController

  def create
    debugger
    @like = Like.new(song_id: params[:songId], user_id: current_user.id)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def deleteLike
    @like = Like.find_by(song_id: params[:songId], user_id: current_user.id)

    if @like
      @like.destroy
      render :show
    else
      render json: ["Like not found"], status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:song_id, :user_id)
  end

end
