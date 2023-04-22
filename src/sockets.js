module.exports = io => {
  io.on('connection', socket => {

    console.log('Socket conectado', socket.id);
    socket.on('coordenadasCliente', (coords) => {
      console.log(coords);
      socket.broadcast.emit('nuevasCoordenadasCliente', socket.id, coords);
    });
  });
};
