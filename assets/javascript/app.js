// CLR Project 1
// Authorization and modal functionality javascript for Taste in Movies
// backend.js

$('#btn-start').mouseover(function () {

  var name = "";

  $(".btn-start").hover(function () {
    name = $(this).attr("#btn-start");
    $(this).stop().show().animate({ opacity: 1 });
  }, function () {
    name = $(this).attr("id");
    $("#image-" + name).stop().animate({ opacity: 0 });
  });

});




/*js for the modal 1*/
// Get the modal
var modal1 = document.getElementById("getLaidForm");
var btn1 = document.getElementById("getLaid");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function () {
  modal1.style.display = "block";
}
span1.onclick = function () {
  modal1.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
/*js for the modal 2*/
var modal2 = document.getElementById("worstDateForm");
var btn2 = document.getElementById("worstDate");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function () {
  modal2.style.display = "block";
}
span2.onclick = function () {
  modal2.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

/*js for the modal 3 Levi's*/
var modal3 = document.getElementById("leviForm");
var btn3 = document.getElementById("leviBtn");
var span3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function () {
  modal3.style.display = "block";
}
span3.onclick = function () {
  modal3.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}