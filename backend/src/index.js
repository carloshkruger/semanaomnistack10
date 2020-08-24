const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebcoket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebcoket(server);

mongoose.connect('mongodb+srv://carlos:11235813@cluster0-fxyhw.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);