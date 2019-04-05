class SessionsController < ApplicationController
    def new
        @user = User.new
    end

    def create
        login_with_credentials
    end

    def destroy
        session.delete :user_id
        redirect_to root_path
    end

    def login_with_credentials
        user = User.find_by(username: params[:username])
        
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            @user = user
            # redirect_to user_path(@user)
            render json: { user: @user, logged_in: true }, status: 200
        else
            @user = User.new
            render json: { user: @user, logged_in: false }, status: 200
        end
       
    end

    def destroy
        # binding.pry
        render json: {logged_in: false }, status: 200
    end


end

# def create
#     #binding.pry
#     if auth_hash = request.env["omniauth.auth"]
#         #they logged in via OAuth
#         user = User.find_or_create_by_omniauth(auth_hash)
#         session[:user_id] = user.id 
#         redirect_to user_path(user)

#     else
#        login_with_credentials
#     end

# end