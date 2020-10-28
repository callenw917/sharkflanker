//controls level2

var gridSharks = [];
var sharks = [];

var ready = false;

var leftButton;
var rightButton;

var emoticon;

//seed: 10 digits
//[0-8] shark positions
//[9] digit spotlight location
/*  1 2 3
    4 0 5
    6 7 8
*/
var numRounds = 10;
var seeds = [
    "1111111113",
    "0000000018",
    "1111111017",
    "1111011114",
    "0010000002",
    "0011110000",
    "1111101101",
    "1000101004",
    "1100100104",
    "1101001117"
]

/* 5 rounds of nonspotlight sharks either the same or not the same
    5 rounds of nonspotlight sharks in random directions*/

var startTime;
var endTime;

var seedCounter = 0;
var correctCounter = 0;

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

    emoticon = document.getElementById("emote-image");

    //correct if shark in spotlight_direction = same direction as clicked
    // leftButton.onclick = function()
    // {
    //     if (spotlight_direction == '0')
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

    //     if (spotlight_direction == '1')
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

    document.onkeyup = function(event) {
        switch(event.keyCode) {
            case 37:
                if (ready) {
                    //Left key pressed
                    if (spotlight_direction == '0')
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
                    if (spotlight_direction == '1')
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

    generateLevel(seeds[seedCounter++]);

    userID = $('#userID').val();

}

var shark_directions =[];
var spotlight_location;
var spotlight_direction;

function generateLevel(seed)
{
  for (var i = 0; i < (seed.length)-1; i++) {
    shark_directions[i] = seed.charAt(i);
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

    //Start timer
    startTime = new Date();
    ready = true;
}

function hide(item, index)
{
    item.style.display = "none";
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

    //Get time
    endTime = new Date();
    var timeDiff = endTime - startTime;

    correctCounter++;

    submitRound(1, timeDiff);

    //hide old sharks
    gridSharks.forEach(hide);

    //generate new sharks
    if (seedCounter <= numRounds -1)
    {
        window.setTimeout(function() { generateLevel(seeds[seedCounter++]); } , 1000);  
    }
    else
    {
        showFeedback();
    }
}

function incorrect()
{
    ready = false;

    //Get time
    endTime = new Date();
    var timeDiff = endTime - startTime;

    submitRound(0, timeDiff);

    //hide old sharks
    gridSharks.forEach(hide);

    //generate new sharks
    if (seedCounter <= numRounds -1)
    {
        window.setTimeout(function() { generateLevel(seeds[seedCounter++]); } , 1000);  
    }
    else
    {
        showFeedback();
    }
}



function submitRound(correct, timeDiff)
{
    $.ajax({
        url: "/config/submit.php",
        type: "POST",
        data: {
            level: 2,
            userID: userID,
            correct: correct,
            dolphin: 0,
            timing: timeDiff,
            round: seedCounter
        },
        cache:false
    });
}

function showFeedback() {
    //percentage of correct answers
    var score = correctCounter / numRounds * 100;

    if (score >= 85)
    {
        emoticon.style.display = "block";
    }
    else if (score >= 70)
    {
        emoticon.src = "Images/neutral.png";
        emoticon.style.display = "block";
    }
    else
    {
        emoticon.src = "Images/sad.png";
        emoticon.style.display = "block";
    }   

    window.setTimeout(function() 
    { 
        window.location.href = 'feedback.php';
    } , 5000); 
    
}