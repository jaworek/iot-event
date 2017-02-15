function initMap()
{
  var testMark = {lat: 52.2429457, lng: -0.901148};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    disableDefaultUI: true,
    center: {lat: 52.2429457, lng: -0.901148}
  });

  var trafficLayer = new google.maps.TrafficLayer();
  // trafficLayer.setMap(map);

  /* Initial Bus location */
  var marker = new google.maps.Marker({
  position: {lat: 52.2428457, lng: -0.901148},
  label: "197",
  title: "test"
  });

  var t = marker.position;
  var k = JSON.parse(JSON.stringify(t));
  // console.log("Lat " + testMark.lat);
  /* Place this individual marker on the map */
  marker.setMap(map);
  //console.log(JSON.stringify(marker.position));
  var testLat = testMark.lat;
  var timer = setInterval(function()
  {
    testLat+=0.00001;
    // console.log(testLat);
    moveMarker(map, marker, testLat);
  }, 1000)
}

/* Moves the marker to the updated Location */
function moveMarker(map, marker, g)
{
  var currentLat = marker.getPosition().lat();
  var currentLng = marker.getPosition().lng();
  var updatedPosition = new google.maps.LatLng(g, -0.901148);
  console.log("Center is: ", currentLat + " : " + currentLng);
  console.log("Current Position is: " + updatedPosition);


  map.panTo(updatedPosition);
  marker.setPosition(updatedPosition);

  /* Reset the center to the new location. */
  // map.setCenter(marker.getPosition());
}

requestResponse();
function requestResponse()
{
  var READY_STATE_DONE = 4; /* request finished and response is ready */
  var SUCCESS          = 200; /* "OK" */

  setInterval(function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(this.readyState == READY_STATE_DONE && this.status == SUCCESS)
      {
        var response = this.responseText;
        console.log(request.responseText);
        document.getElementById("test").innerHTML += "<br>" + response;
      }
    }
    request.open("GET", "busData.php", true)
    request.send();

  }, 3000)

}
