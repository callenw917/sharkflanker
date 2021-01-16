//5 practice levels same as level 1, but with feedback and corrections.

var verticalSharks = [];
var horizontalSharks = [];
var gridSharks = [];
var sharks = [];

var leftButton;
var rightButton;

var ready = false;

var containerCorrect;
var containerIncorrect;
var debrief_window;

var numRounds = 9;
var seeds = [
    "000",
    "010",
    "001",
    "100",
    "110",
    "101",
    "200",
    "210",
    "201"
]

var seedCounter = 0;
var correctCounter = 0;

var userID;

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
    // leftButton = document.getElementById("left-button");
    // rightButton = document.getElementById("right-button");

    containerCorrect   = document.getElementById("correctContainer");
    containerIncorrect = document.getElementById("incorrectContainer");
    debrief_window     = document.getElementById("body-container");

    // ONLY FOR TABLET SUPPORT - MAY BE ADDED LATER
    // leftButton.onclick = function()
    // {
    //     if (innerDirection == '0')
    //     {
    //         correct();
    //     }
    //     else
    //     {
    //         incorrect();
    //     }

    // };

    // rightButton.onclick = function()
    // {
    //     if (innerDirection == '1')
    //     {
    //         correct();
    //     }
    //     else
    //     {
    //         incorrect();
    //     }
    // };

    //Listen for keys
    document.onkeyup = function(event) {
        switch(event.keyCode) {
            case 37:
                //Left key pressed
                if (ready) {
                    if (innerDirection == '0')
                    {
                        correct();
                    }
                    else
                    {
                        incorrect();
                    }
                }
                break;
            case 39:
                //Right key pressed
                if (ready) {
                    if (innerDirection == '1')
                    {
                        correct();
                    }
                    else
                    {
                        incorrect();
                    }
                }
                break;
            case 32:
                //Space key pressed
                break;
        }
    };

    //Generate new levels
    if (seedCounter <= numRounds -1)
        window.setTimeout(function() { generateLevel(seeds[seedCounter++]); } , 2000);

}

var orientation;
var outerDirection;
var innerDirection;

function generateLevel(seed)
{
    containerCorrect.style.display = "none";
    containerIncorrect.style.display = "none";
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

    ready = true;
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
        item.style.transform = "scaleX(" + ((-2 * outerDirection) + 1) + ")";
    }
}

function correct()
{
    ready = false;

    //hide old sharks
    sharks[orientation].forEach(hide);


    //TODO show feedback
    containerCorrect.style.display = "block";

    //generate new sharks
    if (seedCounter <= numRounds - 1)
    {
        window.setTimeout(function() { generateLevel(seeds[seedCounter++]); } , 2000);
    }
    else
    {
        debrief_window.style.display = "block";
    }
}

function incorrect()
{   
    ready = false;

    //hide old sharks
    sharks[orientation].forEach(hide);


    //TDOO SHOW FEEDBACK
    containerIncorrect.style.display = "block";

    //generate new sharks
    if (seedCounter <= numRounds -1)
    {
        window.setTimeout(function() { generateLevel(seeds[seedCounter++]); } , 2000);  
    }
    else
    {
        debrief_window.style.display = "block";
    }
}

function Listen_Again()
{
    console.log("replaying sound");
}

function Change_Page()
{
    window.location.href = 'level1.php';
}

// function showFeedback() {
//     //percentage of correct answers
//     var score = correctCounter / numRounds * 100;

//     console.log(score);

//     window.setTimeout(function() 
//     { 
//         window.location.href = 'feedback.php';
//     } , 5000); 
    
// }