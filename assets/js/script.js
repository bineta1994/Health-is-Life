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

