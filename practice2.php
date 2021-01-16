
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
    <script src="JS/practice2.js"></script>
    
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
            <img src="Images/shark.svg" class="shark row1 col1 absolute" id="shark00">
            <img src="Images/shark.svg" class="shark row1 col2 absolute" id="shark01">
            <img src="Images/shark.svg" class="shark row1 col3 absolute" id="shark02">

            <img src="Images/shark.svg" class="shark row2 col1 absolute" id="shark10">
            <img src="Images/shark.svg" class="shark row2 col2 absolute" id="shark11">
            <img src="Images/shark.svg" class="shark row2 col3 absolute" id="shark12">

            <img src="Images/shark.svg" class="shark row3 col1 absolute" id="shark20">
            <img src="Images/shark.svg" class="shark row3 col2 absolute" id="shark21">
            <img src="Images/shark.svg" class="shark row3 col3 absolute" id="shark22">

    <div id="body-container" class="container debrief">
        <!--Title and context for game-->
        <h1 id="title">Ready For Level 2?</h1>
        <h2 id="top_instr_text"> You have finished the practice! Good Job! Now it is time for the real game! Try and finish each round quickly, but it's very important to press the correct arrow key. Keep playing until the end! Before the level begins, we will do a quick test to see how well you're paying attention. Look at every red dot and try to do it without moving your head at all. Don't look away! Press <b>Start</b> when you're ready!</h2>

        <!--Buttons: go to next page, listen to audio instructions again-->
        <div id="buttons">
        <button  id="next-page"    onclick = "Change_Page();  this.blur();" class="btn btn-primary btn-lg pretty_button right-buffer" width="80" name="next_button"> Start</button>
        </div>
    </div>

</body>
</html>