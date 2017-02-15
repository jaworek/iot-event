<?php

echo("Bus data file content\n");

$host         = "194.81.104.22";
$databaseName = "IOT";
$userName     = "iot";
$passWord     = "qwest";



// try
// {
//   $connection = new PDO("mysql:host=" + $host + ";" + "dbname=" + $databaseName, $userName, $passWord);
//   $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// }
// catch(PDOException $e)
// {
//   echo("Error Message: " + $e->getMessage());
// }

function testRequest()
{
  // $request = $_REQUEST['q'];
  //
  // if($request == "a")
  // {
  //   echo("Your request is granted");
  // }
}
?>
