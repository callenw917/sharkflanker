$(document).ready(function() {
  $('.header').height($(window).height());
})

var page = 1;

GazeCloudAPI.StartEyeTracking();

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
  } else if (page == 6) {
    Page_6();
  }
}

function Page_2() {
  console.log("reached function page 2");
  document.getElementById("shark_image").src = "Images/small_shark.png";
  document.getElementById("shark_image").style.width = '90%';
  document.getElementById("shark_image").style.width = 'auto';

  document.getElementById("top_instr_text").innerHTML = 'To tell your team which direction the shark is swimming, or which way the direction the shark is pointing, press the arrow key on your keyboard.';
  document.getElementById("bot_instr_text").innerHTML = 'If this shark was the special shark, then you would press this key.';
  document.getElementById("bot_instr_text_2").innerHTML = '';
  document.getElementById("small_image_2").style.display = 'none';
  document.getElementById("small_image_1").style.display = 'none';

  document.getElementById("keyboard_arrow").style.display = 'block';


}

function Page_3() {
  document.getElementById("title").innerHTML = 'General Instructions';
  document.getElementById("top_instr_text").innerHTML = 'However, your team only wants to study the <b>special</b> shark.'+
  '<br> There may be many sharks on the screen, but only press the arrow which is pointing in the <b>same direction</b> that the special shark is swimming. <br>';
  document.getElementById("bot_instr_text").innerHTML = 'The more correct arrows you select, the more <b>points</b> you will earn. <br><br>'
  + 'Answer as <b>fast</b> as you can. <br>The faster you are the more points you will receive.';
  document.getElementById("small_image_1").style.display = 'none';

  document.getElementById("shark_image").style.display = 'none';
  document.getElementById("keyboard_arrow").style.display = 'none';
}

function Page_4() {
  document.getElementById("title").innerHTML = 'Level 1';
  document.getElementById("top_instr_text").innerHTML = 'You may see 5 sharks in a row, like this.';
  document.getElementById("bot_instr_text").innerHTML = 'The special shark will be the shark in the middle.</br>This middle shark is facing <b>right</b>, so press the right arrow key.';

  //Image showing sharks
  document.getElementById("horizontal-sharks-instr").style.display = 'flex';
}

function Page_5() {
  document.getElementById("top_instr_text").innerHTML = 'The sharks may look different, like this. Keep watching the middle shark and choose which direction it is looking';
  document.getElementById("bot_instr_text").innerHTML = 'This middle shark is facing <b>left</b>, so press the left arrow key.';

  document.getElementById("horizontal-sharks-instr").style.display = 'none';
  //Image showing vertical sharks
  document.getElementById("vertical-sharks-instr").style.display = 'flex';
}

function Page_6() {
  document.getElementById("top_instr_text").innerHTML = 'Now, you will get a chance to practice. Take your time, and remember to look at the <b>middle shark</b>.';
  document.getElementById("bot_instr_text").innerHTML = '';
  document.getElementById("vertical-sharks-instr").style.display = 'none';

  document.getElementById("next-page").onclick = function() {
    window.location.href = 'practice1.php';
  };
}
