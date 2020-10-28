<?php
session_start(); 
error_reporting(E_ALL); ini_set('display_errors', 1);
$id = $_SESSION['userID'];
$_SESSION['level'] = 1;

?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="CSS/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="JS/level1.js"></script>
</head>

<body>

    <diV id="shark-container">
        <div id="horizontal-sharks">
            <img src="Images/shark.svg" class="shark" id="shark0">
            <img src="Images/shark.svg" class="shark" id="shark1">
            <img src="Images/shark.svg" class="shark" id="shark2">
            <img src="Images/shark.svg" class="shark" id="shark3">
            <img src="Images/shark.svg" class="shark" id="shark4">
        </div>
        <div id="vertical-sharks">
            <img src="Images/shark.svg" class="shark" id="shark5">
            <img src="Images/shark.svg" class="shark" id="shark6">
            <img src="Images/shark.svg" class="shark" id="shark7">
            <img src="Images/shark.svg" class="shark" id="shark8">
            <img src="Images/shark.svg" class="shark" id="shark9">
        </div>
        <div id="grid-sharks">
            <div class="row" id="row1">
                <img src="Images/shark.svg" class="shark" id="shark00">
                <img src="Images/shark.svg" class="shark" id="shark01">
                <img src="Images/shark.svg" class="shark" id="shark02">
            </diV>
            <div class="row" id="row2">
                <img src="Images/shark.svg" class="shark" id="shark10">
                <img src="Images/shark.svg" class="shark" id="shark11">
                <img src="Images/shark.svg" class="shark" id="shark12">
            </diV>
            <div class="row" id="row3">
                <img src="Images/shark.svg" class="shark" id="shark20">
                <img src="Images/shark.svg" class="shark" id="shark21">
                <img src="Images/shark.svg" class="shark" id="shark22">
            </div>
        </div>
    </div>

    <!--Inserting the button panel template-->
    <!-- <php include 'panel_template.php'; ?> -->

    <form method="post" id="submitRound">
        <input type="text" id="userID" name="userID" value="<?php echo $id;?>">
    </form>

    <div id="emotes">
        <img id="emote-image" src="Images/smile.png" alt="">
    </div>

</body>
</html>