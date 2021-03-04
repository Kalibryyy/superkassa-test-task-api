const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http,{cors:{origin:"*"}});
const bodyParser = require('body-parser');

const {
  PORT,
} = require('./configs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const button = {
  state: false,
}

io.on('connection', (socket) => {
  console.log('user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('button_state', (state) => {
    button.state = state;
    io.emit('button_state', button.state);
  });
});

http.listen(PORT, () => console.log(`App listening on port ${PORT}`));