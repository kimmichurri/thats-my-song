class Api::V1::PlaylistsController < ApplicationController
  def index
    render json: Playlist.all
  end

  def create
    Playlist.create(playlist_params)
    head 201
  end

  private

  def playlist_params
    params.permit(:artist, :title)
  end
end