function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          disableDefaultUI: true,
          center: {lat: 52.2429457, lng: -0.901148}
        });

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
      }
