class LikesController < ApplicationController

  def create

  end

  def deleteLike
    @like = Like.find_by(like_params)

    if @like
      @like.destroy
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:song_id, :user_id)
  end

end
