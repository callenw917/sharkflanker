<?php


    require $_SERVER['DOCUMENT_ROOT'].'/config/config.php';
    $userID=$_POST['userID'];
    $correct=$_POST['correct'];
    $dolphin=$_POST['dolphin'];
    $timing=$_POST['timing'];
    $round=$_POST['round'];

    $query = mysqli_query($connection, "INSERT INTO LEVEL1 VALUES('$userID','$correct','$dolphin','$timing','$round')");

    mysqli_close($connection);
?>