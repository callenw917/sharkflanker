<?php


    require $_SERVER['DOCUMENT_ROOT'].'/config/config.php';
    $level=$_POST['level'];
    $userID=$_POST['userID'];
    $correct=$_POST['correct'];
    $dolphin=$_POST['dolphin'];
    $timing=$_POST['timing'];
    $round=$_POST['round'];
    if($level == 1)
        $query = mysqli_query($connection, "INSERT INTO LEVEL1 VALUES('$userID','$correct','$dolphin','$timing','$round')");
    if($level == 2)
        $query = mysqli_query($connection, "INSERT INTO LEVEL2 VALUES('$userID','$correct','$dolphin','$timing','$round')");
    if($level == 3)
        $query = mysqli_query($connection, "INSERT INTO LEVEL3 VALUES('$userID','$correct','$dolphin','$timing','$round')");
    mysqli_close($connection);
?>