function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

$('.message a').click(function(){
	$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});