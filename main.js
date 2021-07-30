var menu  = document.getElementById("micon");
var nav  = document.getElementById("navUl");
menu.addEventListener('click', function(){
	
 if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }

});


