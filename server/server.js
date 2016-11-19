const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const { write } = require('./eventCtrl');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/write', write);




io.on('connection', (socket) => {
  // console.log('a user connected!');
  socket.on('disconnect', () => {
    // console.log('user disconnected!');
  });
  socket.on('chat message', (msg) => {
    
  })
})

http.listen(3000, () => console.log('Listening at 3000'));