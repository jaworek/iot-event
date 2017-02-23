<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bus Stop</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js" charset="utf-8"></script>
</head>

<body>
<?php
require("dbCredentials.php");
?>

  <main>
      <div id="map" class="map"></div>
      <div id="debugWindow"><h3>Debug Window</h3></div>
      <aside class="information">
          <h2 id="time">Time</h2>
          <h2><i class="fa fa-bus" aria-hidden="true"></i> Bus stop: "name"</h2>
          <ul>

            <!-- Buses that stop at this station -->
            <?php
              include("dbConnect.php");
              $query = $connection->query("SELECT DISTINCT number FROM busLocation;");
              while($r = $query->fetch(PDO::FETCH_ASSOC))
              {
                echo '<li>' , $r['number'], '</li>';
              }
            ?>

          </ul>
      </aside>
  </main>

  <div class="moreInfo">
    <div class="advert" id="bottom">
      advert
    </div>
    <div class="advert">
      advert
    </div>
    <div class="advert">
      advert
    </div>
  </div>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7WluhIDRtJqac_gtcALqmhfnVHtXt-Hw&callback=initMap"></script>
</body>

</html>
