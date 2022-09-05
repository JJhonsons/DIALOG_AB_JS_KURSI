window.onscroll = function() {myFunction()};

var navbar = document.getElementById("main-nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    main-nav.classList.add("sticky");
  } else {
    main-nav.classList.remove("sticky");
  }
}
