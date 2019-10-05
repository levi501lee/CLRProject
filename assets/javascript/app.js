// CLR Project 1
// Authorization and modal functionality javascript for Taste in Movies
// backend.js

//////////////////////////FRONT-END FUNCTIONALITY/////////////////////////////////////
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

/////////////////////////////FIREBASE///////////////////////////////////////////////////////

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD-2KTAIkrBfmuFq30tQ0OnpbrMRbCebYs",
  authDomain: "taste-in-movies.firebaseapp.com",
  databaseURL: "https://taste-in-movies.firebaseio.com",
  projectId: "taste-in-movies",
  storageBucket: "",
  messagingSenderId: "540309488028",
  appId: "1:540309488028:web:3b41501682e6d24089c859"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize values
let street = "";
let city = "";
let state = "";
let zip = "";
let genre = "";
let movieTitle = "";
let metadata = "";
let isGetLaid = false;
let isWorstDate = false;
let isFoodToo = false;

//Initialize database
let database = firebase.database();

// Fires on value-change
database.ref().on("value", function (snapshot) {

  // If Firebase has existing data stored (first case)
  if (snapshot.child("street").exists() && snapshot.child("city").exists() && snapshot.child("state").exists() && snapshot.child("zip").exists() && snapshot.child("genre").exists() || snapshot.child("movieTitle").exists() && snapshot.child("metadata").exists()) {

    street = snapshot.val().street;
    city = snapshot.val().city;
    state = snapshot.val().state;
    zip = snapshot.val().zip;
    genre = snapshot.val().genre;
    movieTitle = snapshot.val().movieTitle;
    metadata = snapshot.val().metadata;
    isGetLaid = snapshot.val().isGetLaid;
    isWorstDate = snapshot.val().isWorstDate;
    isFoodToo = snapshot.val().isFoodToo;

    // Change the HTML to reflect the stored values
    $('#street').text(street);
    $('#city').text(city);
    $('#state').text(state);
    $('#zip').text(zip);
    $('#genre').text(street);
    $('#movieTitle').text(movieTitle);
    $('#metadata').text(metadata);
    $('#isGetLaid').text(isGetLaid);
    $('#isWorstDate').text(isWorstDate);
    $('#isFoodToo').text(isFoodToo);

    // Print the data to the console.
    console.log(street);
    console.log(city);
    console.log(state);
    console.log(zip);
    console.log(street);
    console.log(movieTitle);
    console.log(metadata);
    console.log(isGetLaid);
    console.log(isWorstDate);
    console.log(isFoodToo);
  }
  // If any errors are experienced, log them to console.
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

/////////////////////////MODAL FUNCTIONALITY////////////////////////////////////////

//Get a reference from the first modal form
const getLaidForm = document.querySelector('#getLaidForm');
//Get a reference from the second modal form
const worstDateForm = document.querySelector('#worstDateForm');

$('#getLaid').on('click', function () {

  let street = $(this).querySelector('#street').val().trim();
  let city = $(this).querySelector('#city').val().trim();
  let state = $(this).querySelector('#state').val().trim();
  let zip = $(this).querySelector('#zip').val().trim();
  let movieType = $(this).querySelector('#movieType').val().trim();
});

$('#worstDate').on('click', function () {

  let street = $(this).querySelector('#street').val().trim();
  let city = $(this).querySelector('#city').val().trim();
  let state = $(this).querySelector('#state').val().trim();
  let zip = $(this).querySelector('#zip').val().trim();
  let movieType = $(this).querySelector('#movieType').val().trim();
});

/*RJ js for the modal*/
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