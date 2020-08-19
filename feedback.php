<?php
    error_reporting(E_ALL); ini_set('display_errors', 1);
    require $_SERVER['DOCUMENT_ROOT'].'/handlers/feedback_handler.php';
    
?>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flanker</title>

    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="background.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container" id="user-form">
        <div class="container" id="user-form-border">
            <form action= "feedback.php" method="post">
                <h1 id="form-title">How are you feeling?</h1>
                <input type="radio" id="happy" name="mood" value ="happy">
                <label for="happy">Happy</label>
                <input type="radio" id="sad" name="mood" value ="sad">
                <label for="sad">Sad</label>
                <input type="radio" id="mad" name="mood" value ="mad">
                <label for="mad">Mad</label>
                <input type="radio" id="bored" name="mood" value ="bored">
                <label for="bored">Bored</label>

                <h1 id="form-title">How hard was that level?</h1>
                <input type="radio" id="very_easy" name="difficulty" value="very_easy">
                <label for="very_easy">Very Easy</label>
                <input type="radio" id="easy" name="difficulty" value="easy">
                <label for="easy">Easy</label>
                <input type="radio" id="normal" name="difficulty" value="normal">
                <label for="normal">Normal</label>
                <input type="radio" id="hard" name="difficulty" value="hard">
                <label for="hard">Hard</label>
                <input type="radio" id="very_hard" name="difficulty" value="very_hard">
                <label for="very_hard">Very Hard</label>

                <input type="submit" id="submit" name="submit" value="SUBMIT">
            </form>
        </div>
    </div>
</body>
</html>