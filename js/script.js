/* Initialise Google Maps */
function initMap()
{
  var testMark = {lat: 52.2429457, lng: -0.901148};

  var center = {lat: 52.267992, lng: -0.895430};

  // var positions = [testMark,center];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    disableDefaultUI: true,
    center: center
  });

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  /* Initial Bus location */
  var markerCurrentBusStop = new google.maps.Marker({
  position: center,
  label:{
          text: "YOU ARE HERE",
          fontWeight: "900",
          color: "black"
        }
  });

  /* Create a marker for each bus using bus ID.
   * Update each bus location on the map   */
  var markerBus = new google.maps.Marker({
  position: new google.maps.LatLng(52.240455, -0.8866247),
  label: {text: "Bus", fontWeight: "900", color: "black"},
  title: ""
  });

  markerCurrentBusStop.setMap(map);
  markerBus.setMap(map);

  requestResponse(map, markerBus, markerCurrentBusStop);
}

/*
 * Queries the server to update bus data
 * @param map - Google maps object for use in moveMarker parameter
 * @param marker - Google maps marker object for use in moveMarker parameter
*/
var latestBusEntryId = 80; //170 end

function requestResponse(map, marker, markerBusStop)
{
  var READY_STATE_DONE     = 4; /* request finished and response is ready */
  var SUCCESS              = 200; /* "OK" */
  var debugWindow          = document.getElementById("debugWindow");
  var information          = document.getElementsByClassName("information");
  var test                 = document.getElementById("test");
  var timeToArrive         = document.getElementById('timeToArrive');
  var busNumber            = document.getElementById('busNumber');
  var disabledAvailability = document.getElementById('disabledAvail');
  var nextBus              = "nextbus";

  setInterval(function()
  {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function()
    {
      if(this.readyState == READY_STATE_DONE && this.status == SUCCESS)
      {
        try
        {
          /* Convert text to JSON object*/
          var response     = JSON.parse(request.responseText);
          var lng          = response.longitude;
          var lat          = response.latitude;
          var position     = {lat, lng};
          var busId        = response.busid;
          var number       = response.number;
          var availability = response.availability;
          var responseId   = parseInt(response.id);

          latestEntryId = responseId;

          debugWindow.innerHTML = "<h3>Debug Window</h3><br>ID: " + response.id;

          /* Set the marker label to the corresponding bus number */
          // marker.setLabel("Bus ID: " + busId + ". Bus Number: " + response.number);
          marker.setLabel({
                           text: "Bus Number: " + response.number,
                           fontWeight: "900",
                           color: "black"
                         });
          moveMarker(map, marker, position);

          busNumber.innerHTML = number;
          disabledAvailability.innerHTML = availability;
          timeToArrive.innerHTML = getTimeToArrive(position, markerBusStop);
        }
        catch (e)
        {
          if(e instanceof TypeError)
          {
            console.log(e);
          }
          else if(e instanceof SyntaxError)
          {
            console.log(e);
          }

        }
        /* This is to test how the marker moves along the map
         * by artificially stepping through the database id's
        */

        // if(latestBusEntryId == 102)
        // {
        //   latestBusEntryId = 105;
        // }
        if(latestBusEntryId == 170)
        {
          latestBusEntryId == 170;
        }
        else
        {
          latestBusEntryId++;
        }
        console.log(latestBusEntryId);
      }
    };
    request.open("POST", "busData.php?ask=" + latestBusEntryId, true);
    request.send();

  }, 1000);

}

/*
 * Moves the marker to the updated Location
 * @param map - Google maps object
 * @param marker - Google maps marker object
 * @param position - lat and lng as an object e.g{1234, -1234}
*/
function moveMarker(map, marker, position)
{
    var currentLat = marker.getPosition().lat();
    var currentLng = marker.getPosition().lng();
    var updatedPosition = new google.maps.LatLng(position.lat, position.lng);

    marker.setPosition(updatedPosition);
    // map.panTo(updatedPosition);
    /* Reset the center to the new location. */
    // map.setCenter(marker.getPosition());

    // console.log(position);
    // console.log("Center is: ", currentLat + " : " + currentLng);
    console.log("Current Position is: " + updatedPosition);
    // console.log("l: " + position.lng)
}

/*
 * Displays the current time in the information board.
*/
function showTime()
{
  setInterval(function()
  {
    var time  = document.getElementById("time");
    var now   = new Date();
    var hours = now.getHours();
    var mins  = now.getMinutes();
    var secs  = now.getSeconds();

    time.innerHTML = (zeroPad(hours) + ":" + zeroPad(mins) + ":" + zeroPad(secs));
    // console.log(hours + ":" + mins + ":" + secs);
    // console.log(typeof(secs));
  }, 1000);
}

/*
 * Pads the hours, mins and seconds with one zero when the
 * passed figure is less than 10. e.g 6 seconds beomes 06.
*/
function zeroPad(t)
{
  var timeElem = t;
  if(timeElem < 10)
  {
    timeElem = timeElem.toString();
    timeElem = "0" + timeElem;
  }

  // console.log("Time ELem: " + timeElem);
  // console.log("Time type: " + typeof(timeElem));

  return timeElem;
}

var globalTimeToArrive = 0;
function getTimeToArrive(start, end)
{
  var begin       = JSON.stringify(start);
  var lat         = end.getPosition().lat();
  var lng         = end.getPosition().lng();
  var origin      = {lat: parseFloat(start.lat), lng: parseFloat(start.lng)};
  var destination = {lat: lat, lng: lng};
  var distance    = new google.maps.DistanceMatrixService();
  var request     = {origins     : [origin],
                     destinations: [destination],
                     travelMode  : "TRANSIT",
                     unitSystem  : google.maps.UnitSystem.IMPERIAL};
  var debugWindow = document.getElementById("debugWindow");

  distance.getDistanceMatrix(request, function(response, status)
  {
    if(status == "OK")
    {
      result = response.rows[0].elements[0].duration.text;
      globalTimeToArrive = result;
      // return g;
      // debugWindow.innerHTML += "<br />" + result;
      // console.log("ETA: " + result);

    }
    else
    {
        console.log("Something went wrong");
    }
  });

  // console.log("Result OUTSIDE: " + gb);
  return globalTimeToArrive;

  // console.log(origin);
  // console.log(destination);
}

showTime();

// ad slideshow
var number = 1;
var images = [];

function changeSlide()
{
    if (number > 3)
    {
        number = 1;
    }
var num = number;
for (var i = 0; i < 3; i++)
{
    if (num > 3)
    {
      //number = 1;
      num = 1;
    }
    images[i] = '<img src="images/' + num + '.jpg">';
    document.getElementById('ad' + i).innerHTML = images[i];
    num++;
}
    // var file = '<img src="images/' + number + '.jpg">';

    // document.getElementById('slider').innerHTML = file;

    number++;
}

document.addEventListener('DOMContentLoaded', function () {
  setInterval(changeSlide, 5000);
});
