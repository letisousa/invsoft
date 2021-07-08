const tilesProvider = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([-7.4897537548874915, -38.994004534064935], 13)

L.tileLayer(tilesProvider, {
    maxZoom: 18,
}).addTo(myMap)

let marker = L.marker([-7.4897537548874915, -38.994004534064935]).addTo(myMap)
//let marker2 = L.marker([-7.1194958, -34.8450118]).addTo(myMap)

myMap.doubleClickZoom.disable()
myMap.on('dblclick', function(e) {
    let latLng = myMap.mouseEventToLatLng(e.originalEvent)
    //console.log(latLng)
})

navigator.geolocation.getCurrentPosition(
    (pos) => {
        const {coords} = pos
        console.log(coords)
        L.marker([coords.latitude, coords.longitude]).addTo(myMap)
    },
    (err) => {
        console.log(err)
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
)

function showPosition(position)
  {
  x.innerHTML="Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude; 
  }
