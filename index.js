const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.send('on-line');
});

server.listen(3000);