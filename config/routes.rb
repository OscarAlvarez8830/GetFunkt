Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :show, :update, :destroy]
    get "/stream", to: "songs#stream", as: "stream"
    get "/discover", to: "songs#discover", as: "discover"
    get "/usersongs/:username", to: "songs#usersongs", as: "usersongs"
    post "/likes", to: "likes#create", as: "create"
    delete "/likes", to: "likes#deleteLike", as: "delete_like"
    resources :comments
  end

  root "static_pages#root"
  
end
