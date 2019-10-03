$('#btn-start').mouseover( function() {

    var name = "";

    $(".btn-start").hover(function() {
        name = $(this).attr("#btn-start");
        $(this).stop().show().animate({ opacity: 1 });
    }, function() {
        name = $(this).attr("id");
        $("#image-"+name).stop().animate({ opacity: 0 });
    });

});



/*RJ js for the modal*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}