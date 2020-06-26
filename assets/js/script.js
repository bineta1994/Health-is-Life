function whatisyourname() {
  let name;
  let person= prompt ("Welcome! Please enter your name.", "name");
  if (person==null || person == "") {
     prompt ("Welcome! Please enter your name", "name");
  }
  else {
     enteredName= "welcome! "  + person
  }
  document.getElementById("enter-name").innerHTML= enteredName;
};

whatisyourname();

function backgroundColor() {
  document.getElementById("body").style.background= "red";
};

$(".more-services").hide();

$("#read-more").click(function(){
  $(".more-services").toggle();
});


$(".btn-1").click(function(){
   alert("pick a background color");
});


$("services").mouseenter(function(){
  $("p").addClass("mouse")
});

$("services").mouseleave(function(){
  $("p").removeClass("mouse")
});

$(document).ready(function(){
  $(".nav-link").mouseenter(function(){
    $(this).hide().show()
     
  });
});

$(".icons").mouseenter(function(){
    $(this).hide();
})
$(".icons").mouseleave(function(){
    $(this).show();
})




















