$(document).ready(function () {
  $("loader").load("/lib/html/loader.html");
  $("navbar").load("/lib/html/navbar.html");
  $("footer").load("/lib/html/footer.html");
  $("body").css("display", "none");
  $("body").fadeIn(400); 
});
