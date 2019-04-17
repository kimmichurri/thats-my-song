import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.json());

app.locals.playlist = [

];

app.get('/api/v1/playlist/', (request, response) => {
  response.status(200).json(app.locals.playlist);
});

app.post('/api/v1/playlist/', (request, response) => {
  const { title, artist, id } = request.body;
  const newPlaylistSong = {
    id,
    title,
    artist
  }
  app.locals.playlist.push(newPlaylistSong);
  response.status(201).json(newPlaylistSong);
});

app.delete('/api/v1/playlist/:id', (request, response) => {
  const { id } = request.params;
  const { playlist } = app.locals;
  const songIndex = playlist.findIndex(song => song.id == id);
  if(songIndex === -1) {
    return response.status(404).json('Song not found')
  };
  playlist.splice(songIndex, 1);
  return response.status(204).json(null);
});

 export default app;