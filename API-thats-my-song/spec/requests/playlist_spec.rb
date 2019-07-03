require 'rails_helper'

RSpec.describe 'Playlist API', type: :request do
  describe 'Get all songs from playlist' do
    it 'should return all songs stored in the playlist' do
      song1 = Playlist.create(title: 'I want it that way', artist: 'Backstreet Boys')
      song2 = Playlist.create(title: 'Bye Bye Bye', artist: '*NSYNC')

      get '/api/v1/playlists'
      playlists = JSON.parse(response.body, symbolize_names: true)

      expect(response.status).to eq(200)
      expect(playlists).to be_a(Array)
      expect(playlists[0][:title]).to eq(song1.title)
    end
  end
end