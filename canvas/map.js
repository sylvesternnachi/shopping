var map = L.map('map').setView([0, 0], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();

const marker = L.marker([0,0]).addTo(map);

navigator.geolocation.getCurrentPosition(function(pos){
   const latitude = pos.coords.latitude;
   const longitude = pos.coords.longitude;

   marker.setLatLng([latitude, longitude]).update();
   map.setView([latitude, longitude], 13);

   marker.bindPopup ('<strong>Sylvester Nnachi</strong> <br /> This is my current location')
   marker.openPopup();

});

