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
  //send back the proper response code with the newPlaylistItem(why this? Could we send a message saying "Jingle Bell Rock has successfully been added to your plaslist!")
});

app.delete('/api/v1/playlist/:id', (request, response) => {
  // const { id } = request.params;
  console.log(request.params)
  const { playlist } = app.locals;
  console.log(app.locals.playlist);
  const songIndex = playlist.findIndex(song => song.id == request.params.id);
  // if(songIndex === -1) {
  //   return response.status(404).json('Song not found')
  // };

  console.log(songIndex);

  playlist.splice(songIndex, 1);
  return response.status(204);
});

 export default app;