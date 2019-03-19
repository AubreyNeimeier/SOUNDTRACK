require 'pry'
class EntriesController < ApplicationController
    # Add your GamesController code here
    # we're explicity rendering json because we only have one view, thats the root page!! All of these route actions will be triggered by front end javascript! 
    # AKA all these links/routes are hijacked by ajax so that data loads without a page redirect or reload. 
    # if we ommited the render :json we would get a 'missingtemplate' error
    def create
      @entry = Entry.create(entry_params)

      render json: @entry, status: 200
    end
  
    
    def index
      @entries = Entry.all
      render json: @entries
    end
  
    private
  
    def entry_params
      params.require(:entry).permit(:cuid, :date, :entry_text)
    end
  
  end
  