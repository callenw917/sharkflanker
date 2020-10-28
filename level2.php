<?php
session_start(); 
error_reporting(E_ALL); ini_set('display_errors', 1);
$id = $_SESSION['userID'];
$_SESSION['level'] = 2;

?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="CSS/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="JS/level2.js"></script>
    
</head>

<body>
            <img src="Images/shark.svg" class="shark row1 col1 absolute" id="shark00">
            <img src="Images/shark.svg" class="shark row1 col2 absolute" id="shark01">
            <img src="Images/shark.svg" class="shark row1 col3 absolute" id="shark02">

            <img src="Images/shark.svg" class="shark row2 col1 absolute" id="shark10">
            <img src="Images/shark.svg" class="shark row2 col2 absolute" id="shark11">
            <img src="Images/shark.svg" class="shark row2 col3 absolute" id="shark12">

            <img src="Images/shark.svg" class="shark row3 col1 absolute" id="shark20">
            <img src="Images/shark.svg" class="shark row3 col2 absolute" id="shark21">
            <img src="Images/shark.svg" class="shark row3 col3 absolute" id="shark22">
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
