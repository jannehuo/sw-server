'use strict';
const express = require('express');
const Request = require('request');
const cors = require('cors');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const baseUrl = 'https://swapi.co/api/';

// App
const app = express();
app.use(cors())
app.get('/', (request, response) => {
  response.send('Hello world\n');
});

app.get('/characters/', (request,response) => {
  const url = baseUrl + 'people';
  Request(url, (error,res,body) => {
    response.send(JSON.parse(body));
  });
});

app.listen(PORT, HOST);
console.log(`Running on DOCKER http://${HOST}:${PORT}`);