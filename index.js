const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  return res.send('on-line');
});

const artists = ['Bruno Mars','Jack Johnson','Adele'];

server.get('/artists', (req, res) => {
  return res.json(artists);
});

server.get('/artists/:index', (req, res) =>{
  const { index } = req.params;
  return res.json(artists[index]);
});

server.delete('/artists/:index', (req, res) =>{
  const { index } = req.params;
  artists.splice(index, 1);
  return res.json(artists);
});

server.post('/artists', (req, res) => {
  const { name } = req.body;
  artists.push(name);
  return res.json(artists);
});

server.put('/artists/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  artists[index] = name;
  return res.json(artists);
});

server.listen(3000);