//controls level3

var gridSharks = [];
var sharks = [];

var ready = false;

var leftButton;
var rightButton;

var containerCorrect;
var containerIncorrect;
var debrief_window;

//seed: 10 digits
//[0-8] shark positions
//  0-left, 1-right, 2-dolphin
//[9] digit spotlight location
/*  1 2 3
    4 0 5
    6 7 8
*/

var numRounds = 5;
var seeds = [
    "1111111113",
    "0010000018",
    "1121111017",
    "1111011114",
    "0010000002",
];

var seedCounter = 0;
var correctCounter = 0;

var dolphin = false;

window.onload = function()
{
    gridSharks[0] = document.getElementById("shark11");
    gridSharks[1] = document.getElementById("shark00");
    gridSharks[2] = document.getElementById("shark01");
    gridSharks[3] = document.getElementById("shark02");
    gridSharks[4] = document.getElementById("shark10");
    gridSharks[5] = document.getElementById("shark12");
    gridSharks[6] = document.getElementById("shark20");
    gridSharks[7] = document.getElementById("shark21");
    gridSharks[8] = document.getElementById("shark22");

    sharks.push(gridSharks);

    // leftButton = document.getElementById("left-button");
    // rightButton = document.getElementById("right-button");
    // dolphinButton = document.getElementById("dolphin-button");

    containerCorrect   = document.getElementById("correctContainer");
    containerIncorrect = document.getElementById("incorrectContainer");
    debrief_window     = document.getElementById("body-container");

    // ONLY FOR TABLET SUPPORT - MAY BE ADDED LATER
    // correct if shark in spotlight_direction = same direction as clicked
    // leftButton.onclick = function()
    // {
    //     if (spotlight_direction == '0' && dolphin == false)
    //     {
    //         correct();
    //         document.getElementById("Title").innerHTML = 'correct';
    //     }
    //     else
    //     {
    //         incorrect();
    //         document.getElementById("Title").innerHTML = 'incorrect';
    //     }

    // };

    // rightButton.onclick = function()
    // {

    //     if (spotlight_direction == '1' && dolphin == false)
    //     {
    //       document.getElementById("Title").innerHTML = 'correct';
    //         correct();
    //     }
    //     else
    //     {
    //       document.getElementById("Title").innerHTML = 'incorrect';
    //         incorrect();
    //     }
    // };

    // dolphinButton.onclick = function()
    // {
    //     if (dolphin == true)
    //     {
    //         correct();
    //     }
    //     else
    //     {
    //         incorrect();
    //     }
    // };

    document.onkeyup = function(event) {
        switch(event.keyCode) {
            case 37:
                if (ready) {
                    //Left key pressed
                    if (spotlight_direction == '0' && dolphin == false)
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
                if (ready) {
                    //Right key pressed
                    if (spotlight_direction == '1' && dolphin == false)
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
                if (ready) {
                    //Space key pressed
                    if (dolphin == true)
                    {
                        correct();
                    }
                    else
                    {
                        incorrect();
                    }
                }
                break;
        }
    };

    if (seedCounter <= numRounds -1)
        window.setTimeout(function() { generateLevel(seeds[seedCounter++]); } , 2000);

}

var shark_directions =[];
var spotlight_location;
var spotlight_direction;

function generateLevel(seed)
{
    containerCorrect.style.display = "none";
    containerIncorrect.style.display = "none";
    for (var i = 0; i < (seed.length)-1; i++) {
        shark_directions[i] = seed.charAt(i);
        if (seed.charAt(i) == '2')
            {
                console.log("Dolphin time");
                shark_directions[i] = '1';
                gridSharks[i].src = "Images/dolphin.jpg";
                dolphin = true;
            }
    }
    spotlight_location = seed.charAt(9);
    spotlight_direction = seed.charAt(spotlight_location);
    spot_shark = gridSharks[spotlight_location]

    //show the spotlight for 1 second
    Show_Spotlight();

    //Setting each shark's direction
    gridSharks.forEach(setDirection);
}

function Show_Spotlight()
{
  spot_shark.style.display = "initial";
  spot_shark.src = "Images/spotlight.png";

  //display the sharks after 2 seconds
  setTimeout(()=> {gridSharks.forEach(display)},1000);
}

function display(item, index)
{
    //change the spotlight to show a shark again
    spot_shark.src = "Images/shark.svg";
    item.style.display = "block";
    
    //Begin timer
    startTime = new Date();

    ready = true;
}

function hide(item, index)
{
    item.style.display = "none";
    console.log(item.src);
    if (item.src.includes("Images/dolphin.jpg"))
    {
        console.log("Changing Image");
        item.src = "Images/shark.svg";
    }
}

function setDirection(item, index)
{
    if (index != '9')
    {
        item.style.transform = "scaleX(" + ((-2 * shark_directions[index]) + 1) + ")"
    }
}

function correct()
{
    ready = false;

    if (dolphin == true)
    {
        dolphin = false;
    }

    //hide old sharks
    gridSharks.forEach(hide);

    containerCorrect.style.display = "block";

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

function incorrect()
{
    ready = false;

    if (dolphin == true)
    {
        dolphin = false;
    }

    //hide old sharks
    gridSharks.forEach(hide);

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
    window.location.href = 'level3.php';
}