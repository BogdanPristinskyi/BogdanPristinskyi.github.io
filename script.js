$(document).ready(function () {
   $('.navbar__burger').click(function (event) {
      $('.navbar__burger, .navbar__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

window.onscroll = function () { myFunction() };

function myFunction() {
   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("myImg").className = "slideUp";
   } else {
      document.getElementById("myImg").className = "navbar";
   }
}