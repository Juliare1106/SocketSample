var map = L.map('map-template').setView([4.584089, -74.209529], 10);

const tileURL = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png' 
const tileURL2 = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

const tile = L.tileLayer(tileURL2);

// Socket Io
const socket = io.connect();

/* // Marker
const marker = L.marker([50.5, 30.5]); // kiev, ukraine
marker.bindPopup('Hello There!');
map.addLayer(marker);
 */
// Geolocation
map.locate({enableHighAccuracy: true})
map.on('locationfound', (e) => {
  const coords = [e.latlng.lat, e.latlng.lng];
  const newMarker = L.marker(coords);
  newMarker.bindPopup('Su posición');
  map.addLayer(newMarker);
  socket.emit('coordenadascliente', e.latlng);
});

// socket new User connected
socket.on('nuevasCoordenadasCliente', (coords) => {
  console.log(coords);
  const userIcon = L.icon({
    iconUrl: '/img/icon2.png',
    iconSize: [38, 42],
  })
  const newUserMarker = L.marker([coords.lat, coords.lng], {
    icon: userIcon 
  });
  newUserMarker.bindPopup('New User!');
  map.addLayer(newUserMarker);
}); 

map.addLayer(tile);

