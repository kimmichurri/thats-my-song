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
  //decide what to require from request.body
  //mark it by its existing id
  //send in the specific things as newPlaylistItem const from the body that you want, don't just spread it all in
  //go ahead and push that newPlaylistItem into app.locals.playlist
  //send back the proper response code with the newPlaylistItem(why this? Could we send a message saying "Jingle Bell Rock has successfully been added to your plaslist!")
});

 export default app;