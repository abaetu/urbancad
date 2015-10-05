var map;

function initialize() {
var locatie = new google.maps.LatLng(47.159518,27.588727);
  var mapOptions = {
    zoom: 18,
    center: locatie,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
map.setHeading(-180);
var marker = new google.maps.Marker({
    position: locatie, 
    map: map,
    title:"URBANCAD"
});
}

$(document).ready(function(){
	 $('.carousel').carousel({interval:6000, pause : ''});
	initialize();
});


