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

// Dynamically creates the form to display user results
function displayForm() {

  // First, clear the existing elements
  $('.container').reset();

  
}

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

    // Determine which modal form we need to pass values to
    //if ()
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
    // console.log("street " + street);
    // console.log("city " + city);
    // console.log("state " + state);
    // console.log("zip " + zip);
    // console.log("genre " + genre);
    // console.log("movieTitle " + movieTitle);
    // console.log("metadata " + metadata);
    // console.log("isGetLaid " + isGetLaid);
    // console.log("isWorstDate " + isWorstDate);
    // console.log("isFoodToo " + isFoodToo);
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
//Get a reference from the third modal form
const leviForm = document.querySelector('#leviForm');

// Pass the user values when clicked
$('#getLaidSubmit').on('click', function () { getUserValues('#gl'); });
$('#worstDateSubmit').on('click', function () { getUserValues('#wd'); });
$('#leviSubmit').on('click', function () {
//
});

// Passes values from whichever modal is referenced
function getUserValues(prefix) {
  this.event.preventDefault();
  
  street = $(prefix + 'Street').val().trim();
  city = $(prefix + 'City').val().trim();
  state = $(prefix + 'State').val().trim();
  zip = $(prefix + 'Zip').val().trim();
  genre = $(prefix + 'Genre').val().trim();

  console.log("street " + street);
  console.log("city " + city);
  console.log("state " + state);
  console.log("zip " + zip);
  console.log("genre " + genre);
  console.log("movieTitle " + movieTitle);
  console.log("metadata " + metadata);
  console.log("isGetLaid " + isGetLaid);
  console.log("isWorstDate " + isWorstDate);
  console.log("isFoodToo " + isFoodToo);

  // Pass the values to the database
  database.ref().push({
    street: street,
    city: city,
    state: state,
    zip: zip,
    genre: genre
  });

  //displayForm();
}

// 1st Modal ("Get Laid")
var modal1 = document.getElementById("getLaidForm");
var btn1 = document.getElementById("getLaidBtn");
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

// 2nd Modal ("Worst Date")
var modal2 = document.getElementById("worstDateForm");
var btn2 = document.getElementById("worstDateBtn");
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

// 3rd Modal ("Movie + Food")
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