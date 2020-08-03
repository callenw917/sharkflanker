<?php
ob_start();
if (!isset($_SESSION)) {
    session_start();
}

$timezone = date_default_timezone_set("America/Chicago");

// Local Testing
//$connection = mysqli_connect("localhost","root","","flanker");

// Heroku ClearDB Connection
 $db = parse_url(getenv("DATABASE_URL"));

$pdo = new PDO("pgsql:" . sprintf(
    "host=%s;port=%s;user=%s;password=%s;dbname=%s",
    $db["host"],
    $db["port"],
    $db["user"],
    $db["pass"],
    ltrim($db["path"], "/")
));


if(mysqli_connect_errno()) {
    echo "Failed to connect: " . mysqli_connect_errno();
}

?>