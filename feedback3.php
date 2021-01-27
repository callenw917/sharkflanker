<?php
    error_reporting(E_ALL); ini_set('display_errors', 1);
    require $_SERVER['DOCUMENT_ROOT'].'/handlers/feedback_handler3.php';
    
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
            <form action= "feedback3.php" method="post">
                <h1 class="form-title">1. How are you feeling?</h1>
                
                <label for="happy">
                    <input type="radio" id="happy" name="mood" value ="happy" required>
                    Happy
                </label>
                <label for="sad"> 
                    <input type="radio" id="sad" name="mood" value ="sad">
                    Sad
                </label>
                <label for="mad">   
                    <input type="radio" id="mad" name="mood" value ="mad">
                    Mad
                </label>
                <label for="bored">
                    <input type="radio" id="bored" name="mood" value ="bored">
                    Bored
                </label>

                <h1 class="form-title">2. How hard was that level?</h1>

                <label for="very_easy">
                    <input type="radio" id="very_easy" name="difficulty" value="very_easy" required>
                    Very Easy
                </label>
                <label for="easy"> 
                    <input type="radio" id="easy" name="difficulty" value="easy">
                    Easy
                </label>
                <label for="normal">
                    <input type="radio" id="normal" name="difficulty" value="normal">
                    Normal
                </label>
                <label for="hard">
                    <input type="radio" id="hard" name="difficulty" value="hard">
                    Hard
                </label>
                <label for="very_hard">
                    <input type="radio" id="very_hard" name="difficulty" value="very_hard">
                    Very Hard
                </label>
                <input type="submit" id="submit" name="submit" value="SUBMIT">
            </form>
        </div>
    </div>
</body>
</html>