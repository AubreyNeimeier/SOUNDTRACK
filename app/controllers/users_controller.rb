class UsersController < ApplicationController
    
      def create
        @user = User.new(user_params)
        render json: @user, status: 200
          # if @user.save
          #   session[:username] = @user.username
          #   render json: @user, status: 200
          # end
          # #binding.pry
      end
    
    
  
      private
  
      def user_params
        params.require(:user).permit(:username, :password, :name)
      end
  
    
  
  end
  
    