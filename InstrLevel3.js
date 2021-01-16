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
  }
}

function Listen_Again() {
  if (page == 2) {
    Listen_Pg2();
  } else if (page == 3) {
    Listen_Pg3();
  }else if (page==4) {
    Listen_Pg4();
  }
}

document.onkeyup = function(event) {
  switch(event.keyCode) {
      case 32:
          //Space key pressed
          if (listening)
          {
            Change_Page();
            listening = false;
          }
          break;
  }
};

function Page_2() {

  document.getElementById("top_instr_text").innerHTML = 'If you see a dolphin anywhere on the screen, press the big <b>space bar!</b>';
  document.getElementById("bot_instr_text").innerHTML = 'Try pressing it now:';
  document.getElementById("instr-img-1");

  //hide buttons
  document.getElementById("next-page").style.display = "none";
  //Move to next page if spacebar is pressed
  listening = true;
}

function Page_3() {
  document.getElementById("top_instr_text").innerHTML = 'If there is not a dolphin, remember to look at the special shark!';
  document.getElementById("bot_instr_text").innerHTML = 'You should still press the key that shows which way the shark is facing';

  //show buttons
  document.getElementById("next-page").style.display = "inline-block";
  //hide dolphin
  document.getElementById("instr-img-1").style.display = "none"
}

function Page_4() {
  document.getElementById("top_instr_text").innerHTML = 'Now, you will get a chance to practice. Take your time, and keep an eye out for any dolphins!';
  document.getElementById("bot_instr_text").innerHTML = '';

  document.getElementById("next-page").onclick = function() {
    window.location.href = 'practice3.php';
  };
}
