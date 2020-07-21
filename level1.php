<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="CSS/style.css">
    <script src="JS/level1.js"></script>
</head>

<body>
    <h1>Level 1</h1>
    <h3>Which way is the middle shark facing?</h3>

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

    <div id="buttons">
        <button id="left-button" type="button"><</button>
        <button id="right-button" type="button">></button>
    </div>
</body>
</html>