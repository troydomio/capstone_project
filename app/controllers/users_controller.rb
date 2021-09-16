class UsersController < ApplicationController
   rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_message
  before_action :authorize
  skip_before_action :authorize, only: [:create]
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: ['Not authorized'] }, status: :unauthorized
    end
  end

  def patch
    user = User.find_by(id: session[:user_id])
    if user
      body = JSON.parse(request.body.read)
      body.each { |key, value| user[key] = value }
      user.save

      render json: user, status: 201
    else
      render :nothing, status: 404
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
  def destroy
    user = User.find_by(id: session[:user_id])
    if user
      user.destroy
      head :no_content
    else
      render :nothing, status: 404
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
   def record_not_found_message(exception)
   render json: { error: "#{exception.model} not found" }, status: :not_found
 end
end
