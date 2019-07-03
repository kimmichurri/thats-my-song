class Api::V1::PlaylistsController < ApplicationController
  def index
    render json: Playlist.all
  end
end