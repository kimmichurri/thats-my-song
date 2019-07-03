Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :playlists, only: [:index, :create]
    end
  end
end

#defining our routes here
