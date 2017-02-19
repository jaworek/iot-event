<?php
  try
  {
    $connection = new PDO("mysql:host=$host;dbname=$databaseName", $userName, $passWord);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo("<br />Connection Successful<br />");
  }
  catch(PDOException $e)
  {
    echo($e->getMessage());
    // echo("<br />Connection Failed<br />");
    die();
  }
?>
