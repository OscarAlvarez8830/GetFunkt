class Api::CommentsController < ApplicationController

  def index
    # debugger # CHECK!! params
    @comments = Comment.where(song_id: params[:song_id])
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.user_id != current_user.id
      render json: ["Don't be a jerk. You can't delete someone else's comment."], status: 422
    elsif @comment
      @comment.destroy
      render :show
    else
      render json: ["Comment not found"], status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :song_id)
  end

end
