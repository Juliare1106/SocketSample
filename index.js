const express = require('express');
const app = express();
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const engine = require('ejs');
//
//
const server = http.Server(app);
const io = socketIO(server);
//
//// settings
app.set('views', path.join(__dirname, './src/views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
//
//// middlewares
//
//// routes
app.use(require('./src/routes'));
//
//// sockets
require('./src/sockets')(io);
//
//// Static files
 app.use(express.static(path.join(__dirname, './src/public')));

// starting the server
server.listen(3000, () => {
  console.log('Server running on port', 3000);
});
