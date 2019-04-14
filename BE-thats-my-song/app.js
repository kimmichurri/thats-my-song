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

 export default app;