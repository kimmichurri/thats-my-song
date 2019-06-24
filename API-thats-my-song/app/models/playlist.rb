class Playlist < ApplicationRecord
  validates :title,
    presence: true,
    length: {
      minimum: 1
    }
  validates :artist,
    presence: true,
    length: {
      minimum: 1
    }
end
