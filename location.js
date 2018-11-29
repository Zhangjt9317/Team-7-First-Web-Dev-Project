 //Google map API used to display google maps and collect info from them 

 //  google map API information
 var googleAPI_key = "AIzaSyC7vnbVasWSJ-2i10phXjk_Q07yE6tOa-M";
 var mapsURL = "https://maps.googleapis.com/maps/api/js?key=" + googleAPI_key + "&callback=initMap"

 //global variables should be accessible from other files
 var latitude;
 var longitude;
 var pos;
 var title = "Hello";
 var content;

 //clicking on the mapView 
 $("#mapView").click(function initMap() {
     map = new google.maps.Map(document.getElementById('map-container-5'), {
         center: {
             lat: 47.605770896274976,
             lng: -122.33220917514923
         },
         zoom: 12,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
     });

     // Try HTML5 geolocation.
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function (position) {
             pos = {
                 lat: position.coords.latitude,
                 lng: position.coords.longitude
             };

             var markerImage = 'marker.png';
             var marker = new google.maps.Marker({
                 position: pos,
                 map: map,
                 icon: markerImage,
             })

             //event listener for click
             marker.addListener('click', function () {
                 infowindow.open(map, marker);
             });

             //prints out in the div shown by the marker
             var contentString = '<div class="info-window">' +
                 '<h3>' + "You are currently here: " + '</h3>' +
                 '<div class="info-content">' +
                 '<p>' + content + '</p>' +
                 '</div>' +
                 '</div>';

             //creating an infowindow for the 
             var infowindow = new google.maps.InfoWindow({
                 content: contentString,
                 maxWidth: 400
             });

             map.setCenter(pos);
         }, function () {
             handleLocationError(true, infoWindow, map.getCenter());
         });
     } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
     }

     var styles = [{
             "elementType": "geometry",
             "stylers": [{
                 "color": "#ebe3cd"
             }]
         },
         {
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#523735"
             }]
         },
         {
             "elementType": "labels.text.stroke",
             "stylers": [{
                 "color": "#f5f1e6"
             }]
         },
         {
             "featureType": "administrative",
             "elementType": "geometry.stroke",
             "stylers": [{
                 "color": "#c9b2a6"
             }]
         },
         {
             "featureType": "administrative.land_parcel",
             "elementType": "geometry.stroke",
             "stylers": [{
                 "color": "#dcd2be"
             }]
         },
         {
             "featureType": "administrative.land_parcel",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#ae9e90"
             }]
         },
         {
             "featureType": "landscape.natural",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#dfd2ae"
             }]
         },
         {
             "featureType": "poi",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#dfd2ae"
             }]
         },
         {
             "featureType": "poi",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#93817c"
             }]
         },
         {
             "featureType": "poi.park",
             "elementType": "geometry.fill",
             "stylers": [{
                 "color": "#a5b076"
             }]
         },
         {
             "featureType": "poi.park",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#447530"
             }]
         },
         {
             "featureType": "road",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#f5f1e6"
             }]
         },
         {
             "featureType": "road.arterial",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#fdfcf8"
             }]
         },
         {
             "featureType": "road.highway",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#f8c967"
             }]
         },
         {
             "featureType": "road.highway",
             "elementType": "geometry.stroke",
             "stylers": [{
                 "color": "#e9bc62"
             }]
         },
         {
             "featureType": "road.highway.controlled_access",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#e98d58"
             }]
         },
         {
             "featureType": "road.highway.controlled_access",
             "elementType": "geometry.stroke",
             "stylers": [{
                 "color": "#db8555"
             }]
         },
         {
             "featureType": "road.local",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#806b63"
             }]
         },
         {
             "featureType": "transit.line",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#dfd2ae"
             }]
         },
         {
             "featureType": "transit.line",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#8f7d77"
             }]
         },
         {
             "featureType": "transit.line",
             "elementType": "labels.text.stroke",
             "stylers": [{
                 "color": "#ebe3cd"
             }]
         },
         {
             "featureType": "transit.station",
             "elementType": "geometry",
             "stylers": [{
                 "color": "#dfd2ae"
             }]
         },
         {
             "featureType": "water",
             "elementType": "geometry.fill",
             "stylers": [{
                 "color": "#b9d3c2"
             }]
         },
         {
             "featureType": "water",
             "elementType": "labels.text.fill",
             "stylers": [{
                 "color": "#92998d"
             }]
         }
     ]

     map.set('styles', styles);

     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
         infoWindow.setPosition(pos);
         infoWindow.setContent(browserHasGeolocation ?
             'Error: The Geolocation service failed.' :
             'Error: Your browser doesn\'t support geolocation.');
         infoWindow.open(map);
     }

     google.maps.event.addDomListener(window, 'load', initMap);

 });