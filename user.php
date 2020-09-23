<?php
    error_reporting(E_ALL); ini_set('display_errors', 1);
    require $_SERVER['DOCUMENT_ROOT'].'/handlers/user_handler.php';
    
?>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flanker</title>

    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="background.css">
    <link rel="stylesheet" type="text/css" href="CSS/form.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container" id="user-form">
        <div class="container" id="user-form-border">
            <h1 id="user-title" class="form-title">Please enter your User ID</h1>
            <form action= "user.php" method="post">
                <input type="text" id="userID" name="userID">
                <input type="submit" id="submit" name="submit" value="SUBMIT">
            </form>
        </div>
    </div>
</body>
</html>