const tilesProvider = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([ -8.00937,  -34.8553], 13)

L.tileLayer(tilesProvider, {
    maxZoom: 18,
}).addTo(myMap)

var myIcon = L.icon({
    iconUrl: './imagens/ilaranja.png',
    iconSize: [30,30],

});

let marker = L.marker([ -8.00937, -34.8553], {myIcon}).addTo(myMap)
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

/*var x=document.getElementById("demo");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
  }
  function showPosition(position)
  {
  lat=position.coords.latitude;
  lon=position.coords.longitude;
  latlon=new google.maps.LatLng(lat, lon)
  mapholder=document.getElementById('mapholder')
  mapholder.style.height='250px';
  mapholder.style.width='500px';
 
  var myOptions={
  center:latlon,zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  mapTypeControl:false,
  navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };
  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"Você está Aqui!"});
  }
*/