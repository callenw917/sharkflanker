$(document).ready(function() {
  $('.header').height($(window).height());
})

var page = 1;
var listening = false; 

function Change_Page() {
  page++;
  if (page == 2) {
    Page_2();
  } else if (page == 3) {
    Page_3();
  } else if (page == 4) {
    Page_4();
  } else if (page == 5) {
    Page_5();
  }
}

function Listen_Again() {
  if (page == 2) {
    Listen_Pg2();
  } else if (page == 3) {
    Listen_Pg3();
  }else if (page==4) {
    Listen_Pg4();
  }else if (page==5) {
    Listen_Pg5();
  }
}

document.onkeyup = function(event) {
  switch(event.keyCode) {
      case 39:
          //Right key pressed
          if (listening) {
            Change_Page();
            listening = false;
          }
          break;
  }
};


function Page_2() {
  document.getElementById("top_instr_text").innerHTML = 'Then, the light will disappear, and sharks will appear.';
  document.getElementById("bot_instr_text").innerHTML = 'Look for the shark that is in the same place as the light.';
  document.getElementById("instr-img-1");
}

function Page_3() {
  document.getElementById("top_instr_text").innerHTML = 'Then, the light will disappear, and sharks will appear.';
  document.getElementById("bot_instr_text").innerHTML = 'Look for the shark that is in the same place as the light.';
  document.getElementById("instr-img-1").src = "Images/shark_grid_instr.svg";
}

function Page_4() {
  document.getElementById("top_instr_text").innerHTML = 'The shark you should be looking at is this shark:';
  document.getElementById("bot_instr_text").innerHTML = 'Now, press the key that shows which way the shark is facing';
  document.getElementById("instr-img-1").src = "Images/shark_circled_instr.svg";

  //Disable Buttons
  document.getElementById("next-page").style.display = "none";
  //Listen for right key
  listening = true;

}

function Page_5() {
  document.getElementById("top_instr_text").innerHTML = 'Now you are ready for level 2!';
  document.getElementById("bot_instr_text").innerHTML = '';

  //Show buttons
  document.getElementById("next-page").style.display = "inline-block";
  //all images dissapear
  document.getElementById("next-page").onclick = function() {
    window.location.href = 'level2.php';
  };
}

