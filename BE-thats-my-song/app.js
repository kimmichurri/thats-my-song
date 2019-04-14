import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.json());

app.locals.playlist = [ { song: 'song1' }, { song: 'song2' }

];

app.get('/api/v1/playlist/', (request, response) => {
  response.status(200).json(app.locals.playlist);
});

 export default app;