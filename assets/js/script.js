function whatisyourname() {
  let name;
  let person= prompt ("Welcome! Please enter your name.", "name");
  if (person==null || person == "") {
     prompt ("Welcome! Please enter your name", "name");
  }
  else {
     enteredName= "welcome "  + person
  }
  document.getElementById("enter-name").innerHTML= enteredName;
};

whatisyourname();

function backgroundColor() {
  document.getElementById("body").style.background= "red";
};

function backgroundColor2() {
  document.getElementById("body").style.background= "white";
};

$(".more-services").hide();

$("#read-more").click(function(){
  $(".more-services").toggle();
});



$(".services-paragraphs").mouseenter(function(){
  $(".services-paragraphs").addClass("mouse1");
});


$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "#8db306");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});



















