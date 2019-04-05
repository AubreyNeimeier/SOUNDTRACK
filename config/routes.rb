

  Rails.application.routes.draw do
    resources :entries, only: [:index, :create]
    resources :sessions, only: [:create]
    resources :users, only: [:create]

    get  '/logout' => 'sessions#destroy'

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
