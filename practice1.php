<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="CSS/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="background.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="JS/practice1.js"></script>
</head>

<body>
    <div id="correctContainer">
        <p>Correct!</p>
        <img src="" alt="">
    </div>
    <div id="incorrectContainer">
        <p>Incorrect</p>
        <img src="" alt="">
    </div>
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
    <div id="body-container" class="container debrief">
        <!--Title and context for game-->
        <h1 id="title">Ready For Level 1?</h1>
        <h2 id="top_instr_text"> You have finished the practice! Good Job! Now it is time for the real game! Try and finish each round quickly, but it's very important to press the correct arrow key. Keep playing until the end! Before the level begins, we will do a quick test to see how well you're paying attention. Look at every red dot and try to do it without moving your head at all. Don't look away! Press <b>Start</b> when you're ready!</h2>

        <!--Buttons: go to next page, listen to audio instructions again-->
        <div id="buttons">
        <button  id="next-page"    onclick = "Change_Page();  this.blur();" class="btn btn-primary btn-lg pretty_button right-buffer" width="80" name="next_button"> Start</button>
        </div>
    </div>

</body>
</html>