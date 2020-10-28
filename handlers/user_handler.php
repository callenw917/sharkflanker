<?php
session_start();

//Declaring variable
$userID = "";

if(isset($_POST['submit'])) 
    {
        $userID = strip_tags($_POST['userID']);
        $_SESSION['userID'] = $userID;

        header("Location: instructionsLevel1.html");
        exit();
    }

?>