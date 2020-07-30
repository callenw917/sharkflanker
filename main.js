$(document).ready(function() {
  $('.header').height($(window).height());
})

var page = 1;

function Change_Page() {
  page++;
  if (page == 2) {
    Page_2();
  } else if (page == 3) {
    Page_3();
  } else if (page == 4)
    Page_4();
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

function Page_2() {
  console.log("reached function page 2");
  document.getElementById("shark_image").src = "Images/small_shark.png";
  document.getElementById("shark_image").style.width = '90%';
  document.getElementById("shark_image").style.width = 'auto';

  document.getElementById("top_instr_text").innerHTML = 'To tell your team which direction the shark is swimming, or which way the direction the shark is pointing, tap the corresponding arrow at the bottom of the screen. <br> For example:';
  document.getElementById("bot_instr_text").innerHTML = 'If this shark was the special shark, then you would tap this arrow.';
  document.getElementById("bot_instr_text_2").innerHTML = '';
  document.getElementById("small_image_2").style.display = 'none';

  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);

}

function Page_3() {
  document.getElementById("title").innerHTML = 'General Instructions';
  document.getElementById("top_instr_text").innerHTML = 'However, your team only wants to study the <b>special</b> shark.'+
  '<br> There may be many sharks on the screen, but only tap the arrow which is pointing<br> in the <b>same direction</b> that the special shark is swimming. <br>';
  document.getElementById("bot_instr_text").innerHTML = 'The more correct arrows you select, the more <b>points</b> you will earn <br> because you will be able to take more pictures. <br><br>'
  + 'Answer as <b>fast</b> as you can. <br>The faster you respond, the more pictures you can take and the more points you will receive.';
  document.getElementById("small_image_1").style.display = 'none';

  document.getElementById("shark_image").style.display = 'none';
  //document.getElementsByTagName("template").style.display = 'none';
}

function Page_4() {
  document.getElementById("title").innerHTML = 'Level 1';
  document.getElementById("top_instr_text").innerHTML = 'You may see 5 sharks in a row, like this.';
  document.getElementById("bot_instr_text").innerHTML = 'The special shark will be the shark in the middle.';
}
