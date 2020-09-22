//controls level3

var gridSharks = [];
var sharks = [];

var leftButton;
var rightButton;

var emoticon;

/*  seed: 19 digits
    [0-8] shark positions
    [9] digit spotlight location
    [10-18] shark sizes (either 0,1,2,)
    1 2 3
    4 0 5
    6 7 8
*/

var numRounds = 10;
var seeds = [
    "1111111108012210212",
    "0010000002010012012",
    "0000000107012012012",
    "0111111111022012012",
    "0001000003012212012",
    "0011110002011012012",
    "1111101100012012012",
    "1000101008012012012",
    "1100100106012012112",
    "1101001114012012010"
]

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

    leftButton = document.getElementById("left-button");
    rightButton = document.getElementById("right-button");

    emoticon = document.getElementById("emote-image");

    //correct if shark in spotlight_direction = same direction as clicked
    leftButton.onclick = function()
    {
        if (spotlight_direction == '0')
        {
            correct();
            document.getElementById("Title").innerHTML = 'correct';
        }
        else
        {
            incorrect();
            document.getElementById("Title").innerHTML = 'incorrect';
        }

    };

    rightButton.onclick = function()
    {

        if (spotlight_direction == '1')
        {
          document.getElementById("Title").innerHTML = 'correct';
            correct();
        }
        else
        {
          document.getElementById("Title").innerHTML = 'incorrect';
            incorrect();
        }
    };

    userID = $('#userID').val();

    generateLevel(seeds[seedCounter++]);

}

var shark_directions =[];
var shark_sizes=[];
var spotlight_location;
var spotlight_direction;

function generateLevel(seed)
{
  for (var i = 0; i < (seed.length)-1; i++) {
    shark_directions[i] = seed.charAt(i);
    shark_sizes[i] = seed.charAt(i+10);
  }
    spotlight_location = seed.charAt(9);
    spotlight_direction = seed.charAt(spotlight_location);
    spot_shark = gridSharks[spotlight_location]

    //show the spotlight for 1 second
    Show_Spotlight();

    //Setting each shark's direction
    gridSharks.forEach(setDirection);
    gridSharks.forEach(setSizes);

    
}

function display(item, index)
{
    //change the spotlight to show a shark again
    spot_shark.src = "Images/shark.svg";
    item.style.display = "block";
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

function setSizes(item, index)
{
  var size = shark_sizes[index];
    if (index != '9')
    {
      if(size==0){
        item.style.width = "8%"
      }
      else if(size==1){
        item.style.width = "12%"
      }
      else if(size==2){
        item.style.width = "34%"
      }
    }
}

function correct()
{
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

function Show_Spotlight()
{
  spot_shark.style.display = "initial";
  spot_shark.src = "Images/spotlight.png";

  //display the sharks after 2 seconds
  setTimeout(()=> {gridSharks.forEach(display)},1000);
  //Begin timer
  startTime = new Date();
}

function submitRound(correct, timeDiff)
{
    $.ajax({
        url: "/config/submit.php",
        type: "POST",
        data: {
            level: 3,
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