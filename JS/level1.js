var verticalSharks = [];
var horizontalSharks = [];
var gridSharks = [];
var sharks = [];

var leftButton;
var rightButton;

var seeds = [
    "000",
    "010",
    "001",
    "010",
    "011",
    "000",
    "010",
    "001",
    "000",
    "010",
    "100",
    "110",
    "101",
    "110",
    "111",
    "100",
    "110",
    "101",
    "100",
    "110",
    "200",
    "210",
    "201",
    "210",
    "211",
    "200",
    "210",
    "201",
    "200",
    "210",
    
]

var startTime;
var endTime;

var seedCounter = 0;

var userID

window.onload = function()
{
    verticalSharks[0] = document.getElementById("shark2");
    verticalSharks[1] = document.getElementById("shark0");
    verticalSharks[2] = document.getElementById("shark1");
    verticalSharks[3] = document.getElementById("shark3");
    verticalSharks[4] = document.getElementById("shark4");

    horizontalSharks[0] = document.getElementById("shark7");
    horizontalSharks[1] = document.getElementById("shark5");
    horizontalSharks[2] = document.getElementById("shark6");
    horizontalSharks[3] = document.getElementById("shark8");
    horizontalSharks[4] = document.getElementById("shark9");

    gridSharks[0] = document.getElementById("shark11");
    gridSharks[1] = document.getElementById("shark00");
    gridSharks[2] = document.getElementById("shark01");
    gridSharks[3] = document.getElementById("shark02");
    gridSharks[4] = document.getElementById("shark10");
    gridSharks[5] = document.getElementById("shark12");
    gridSharks[6] = document.getElementById("shark20");
    gridSharks[7] = document.getElementById("shark21");
    gridSharks[8] = document.getElementById("shark22");

    sharks.push(verticalSharks);
    sharks.push(horizontalSharks);
    sharks.push(gridSharks);

    leftButton = document.getElementById("left-button");
    rightButton = document.getElementById("right-button");

    leftButton.onclick = function()
    {
        if (innerDirection == '0')
        {
            correct();
        }
        else
        {
            incorrect();
        }

    };

    rightButton.onclick = function()
    {
        if (innerDirection == '1')
        {
            correct();
        }
        else
        {
            incorrect();
        }
    };

    if (seedCounter <= 29)
        generateLevel(seeds[seedCounter++]);

    userID = $('#userID').val();
}

var orientation;
var outerDirection;
var innerDirection;

function generateLevel(seed)
{
    orientation = seed.charAt(0);
    outerDirection = seed.charAt(1);
    innerDirection = seed.charAt(2);
    
    //Making the sharks visible
    sharks[orientation].forEach(display);

    //Setting outer sharks' directions
    sharks[orientation].forEach(setOuterDirection);

    //Setting inner shark's direction
    //Use the +1 so scaleX is never 0
    sharks[orientation][0].style.transform = "scaleX(" + ((-2 * innerDirection) + 1) + ")"

    //Begin timer
    startTime = new Date();
}

function display(item, index)
{
    item.style.display = "block";
}

function hide(item, index)
{
    item.style.display = "none";
}

function setOuterDirection(item, index)
{
    if (index != '0')
    {
        item.style.transform = "scaleX(" + ((-2 * outerDirection) + 1) + ")"
    }
}

function correct()
{
    //Get time
    endTime = new Date();
    var timeDiff = endTime - startTime;

    //hide old sharks
    sharks[orientation].forEach(hide);

    //Submit Data
    submitRound(1, timeDiff);



    //generate new sharks
    if (seedCounter <= 29)
        window.setTimeout(function() { generateLevel(seeds[seedCounter++]); } , 1000);
}

function incorrect()
{   
    //Get time
    endTime = new Date();
    var timeDiff = endTime - startTime;

    //hide old sharks
    sharks[orientation].forEach(hide);

    //Submit Data
    submitRound(0, timeDiff);

    //generate new sharks
    if (seedCounter <= 29)
        window.setTimeout(function() { generateLevel(seeds[seedCounter++]); } , 1000);  
}

function submitRound(correct, timeDiff)
{
    $.ajax({
        url: "/config/submit.php",
        type: "POST",
        data: {
            userID: userID,
            correct: correct,
            dolphin: 0,
            timing: timeDiff,
            round: seedCounter
        },
        cache:false
    });
}
