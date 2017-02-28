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
          <h2><i class="fa fa-bus" aria-hidden="true"></i> Bus stop: "The Close"</h2>
          <!-- <ul> -->

            <!-- Buses that stop at this station -->
            <?php
              // include("dbConnect.php");
              // $query = $connection->query("SELECT DISTINCT number FROM busLocation;");
              // while($r = $query->fetch(PDO::FETCH_ASSOC))
              // {
              //   echo '<li>' , $r['number'], '</li>';
              // }
            ?>
          <!-- </ul> -->
          <table class="table">
            <tr class="header">
              <th>Bus Num</th>
              <th>Disabled Access Availability</th>
              <th>Time to Arrive</th>
            </tr>
            <tr class="busInfo">
              <td id="busNumber"></td>
              <td id="disabledAvail"></td>
              <td id="timeToArrive"></td>
            </tr>
          </table>
      </aside>
  </main>

  <div class="moreInfo">
    <div id="ad0" class="advert">

    </div>
    <div id="ad1" class="advert">
      <img src="images/2.jpg" alt="">
    </div>
    <div id="ad2" class="advert">
      <img src="images/3.jpg" alt="">
    </div>
  </div>
  <!-- johns api = AIzaSyB7WluhIDRtJqac_gtcALqmhfnVHtXt-Hw -->
  <!-- ife's api web = AIzaSyCn1__lWq1vj-hTGHdduYoMxxgMtjC02gY-->
  <!-- ife's distance matrix api = AIzaSyDk6lx62wdIhi7rVF4ZmeZgPWoWKKmAvUU -->
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7WluhIDRtJqac_gtcALqmhfnVHtXt-Hw&callback=initMap"></script>
</body>

</html>
