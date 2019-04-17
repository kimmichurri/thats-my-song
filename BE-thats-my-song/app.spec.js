import request from 'supertest';
import '@babel/polyfill';
import app from './app';

describe('/api/v1/playlist', () => {
  let playlist;
  beforeEach(() => {
    playlist = [
      {
        "id": 63303,
        "title": "Don't Think Twice It's Alright",
        "artist": "Dylan, Bob"
      },
      {
        "id": 68158,
        "title": "There's A Light That Never Goes Out",
        "artist": "Smiths, The"
      }
    ];
    app.locals.playlist = playlist;
  });

  describe('GET from /api/v1/playlist', () => {
    it('should return a status of 200 with a playlist', async () => {
      const response = await request(app).get('/api/v1/playlist/');
      expect(response.status).toBe(200);
    });
  });

  describe('POST to /api/v1/playlist', () => {
    it('should return a status of 201 with a new playlist array', async () => {
      expect(app.locals.playlist.length).toBe(2);
      const newSong = {
        "id": 35462,
        "title": "Honey",
        "artist": "Carey, Mariah"
      };
      const response = await request(app).post('/api/v1/playlist').send(newSong);
      expect(response.status).toBe(201);
      expect(app.locals.playlist.length).toBe(3);
    });
  });

  describe('DELETE to /api/v1/playlist/:id', () => {
    it('should return a status of 204 with an updated playlist', async () => {
      expect(app.locals.playlist[0].id).toBe(63303);
      const response = await request(app).delete('/api/v1/playlist/63303');
      expect(response.status).toBe(204);
      expect(app.locals.playlist[0].id).toBe(68158);
    });

    it('should return a status of 404 with the same playlist', async () => {
      expect(app.locals.playlist.length).toBe(2);
      const response = await request(app).delete('/api/v1/playlist/123456789');
      expect(response.status).toBe(404);
      expect(app.locals.playlist.length).toBe(2);
    });
  });
});