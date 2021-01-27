<?php
session_start();

require $_SERVER['DOCUMENT_ROOT'].'/config/config.php';

//Declaring variable
$userID = "";
$mood = "";
$difficulty = "";
$level = 3;

if(isset($_POST['submit'])) 
    {
        $userID = $_SESSION['userID'];
        $mood = $_POST['mood'];
        $difficulty = $_POST['difficulty'];

        $query = mysqli_query($connection, "INSERT INTO CHILD_FEEDBACK VALUES('$userID','$level','$mood','$difficulty')");

        if ($level == 1)
        {
            header("Location: instructionsLevel2.html");
        }
        else if ($level == 2)
        {
            header("Location: instructionsLevel3.html");
        }
        else if ($level == 3)
        {
            //to be changed when final form is created
            header("Location: endPage.html");
        }
        exit();
    }

?>