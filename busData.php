<?php
// error_reporting(E_ERROR | E_PARSE);
//
// echo("Bus data file content <br />");
//
// $host         = "194.81.104.22";
// $databaseName = "dbiot";
// $userName     = "iot";
// $passWord     = "iot2017";
//
// try
// {
//   $connection = new PDO("mysql:host=$host;dbname=$databaseName", $userName, $passWord);  // $connection = new PDO("mysql:host=" + $host + ";" + "dbname=" + $databaseName, $userName, $passWord);
//   $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//
//   $query = $connection->query("SELECT * FROM busLocation ORDER BY id DESC LIMIT 1;");
//   // echo '<pre>', print_r($r), '</pre>';
//
//   while($r = $query->fetch(PDO::FETCH_ASSOC))
//   {
//     echo("--------------------------------------");
//     echo($r['id'] . '<br />');
//     echo($r['busid'] . '<br />');
//     echo($r['latitude'] . '<br />');
//     echo($r['longitude'] . '<br />');
//     echo($r['currentDate'] . '<br />');
//     echo($r['currentTime'] . '<br />');
//     echo($r['number'] . '<br />');
//     echo($r['availability'] . '<br />');
//     echo("--------------------------------------");
//   }
//   // echo("<br />Success");
// }
// catch(PDOException $e)
// {
//   // echo("Error Message: " + $e->getMessage());
//   // echo("Fail");
//   die();
// }
//
//

// getLatestBusData();
// function getLatestBusData()
// {
//   $reqString = $_REQUEST['ask'];
//   include("dbCredentials.php");
//   include("dbConnect.php");
//
//   $query = $connection->query("SELECT * FROM busLocation WHERE id = $reqString;");
//   while($r = $query->fetch(PDO::FETCH_ASSOC))
//   {
//     // echo($r['latitude'] . '<br />');
//     // echo($r['longitude'] . '<br />');
//     print_r(json_encode($r));
//   }
// }

getLatestRow();
function getLatestRow()
{
  $reqString = $_REQUEST['ask'];
  include("dbCredentials.php");
  include("dbConnect.php");

  // if($reqString == "nextbus")
  // {
    $query = $connection->query("SELECT * FROM busLocationdemo WHERE id = $reqString;");
    while($r = $query->fetch(PDO::FETCH_ASSOC))
    {
      // echo("Lat is: " . $r['latitude'] . '<br />');
      // echo($r['longitude'] . '<br />');
      print_r(json_encode($r));
    }
  // }
}

// testRequest();
function testRequest()
{
  $reqString = $_REQUEST['ask'];
  include("dbCredentials.php");
  include("dbConnect.php");

  $query = $connection->query("SELECT * FROM busLocation WHERE id = $reqString;");
  while($r = $query->fetch(PDO::FETCH_ASSOC))
  {
    // echo($r['latitude'] . '<br />');
    // echo($r['longitude'] . '<br />');
    print_r(json_encode($r));
  }
  //
  // if($reqString == "myquery")
  // {
  //   /* Gets the data of last entered id */
  //   // $query = $connection->query("SELECT * FROM busLocation ORDER BY id DESC LIMIT 1;");
  //   $query = $connection->query("SELECT * FROM busLocation WHERE id = $reqString;");
  //   while($r = $query->fetch(PDO::FETCH_ASSOC))
  //   {
  //     // echo($r['latitude'] . '<br />');
  //     // echo($r['longitude'] . '<br />');
  //     print_r(json_encode($r));
  //   }
  //
  //   // echo("<br />REQUEST IS: " . $reqString);
  //   // echo("<br /> Your request is granted<br />");
  //   // echo("--------------------------------------<br />");
  // }
}


?>
