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

  let newDiv = $('');
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
let metaScore = "";
let isGetLaid = false;
let isWorstDate = false;
let isFoodToo = false;

// Global variable for API reference
let lat = 0;
let lng = 0;
let latLng = "";

//Initialize database
let database = firebase.database();

// Fires on value-change
database.ref().on("value", function (snapshot) {

  // If Firebase has existing data stored (first case)
  if (snapshot.child("street").exists() && snapshot.child("city").exists() && snapshot.child("state").exists() && snapshot.child("zip").exists() && snapshot.child("genre").exists() || snapshot.child("movieTitle").exists() && snapshot.child("metaScore").exists()) {

    street = snapshot.val().street;
    city = snapshot.val().city;
    state = snapshot.val().state;
    zip = snapshot.val().zip;
    genre = snapshot.val().genre;
    movieTitle = snapshot.val().movieTitle;
    metaScore = snapshot.val().metaScore;
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
    $('#metaScore').text(metaScore);
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
    // console.log("metaScore " + metaScore);
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
  console.log("metaScore " + metaScore);
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

/////////////////////////API////////////////////////////////////////////

     // This .on(“click”) function will trigger the AJAX Call
     $('#getLaidSubmit').on('click', function(event) {
       // event.preventDefault() can be used to prevent an event’s default behavior.
       // Here, it prevents the submit button from trying to submit a form when clicked
       event.preventDefault();
       city = $('#glStreet').val().trim();
       state = $('#glCity').val().trim();
       // Here we grab the text from the input box
       let cityState = city + "," + state;
       // Here we construct our URL http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC
       let queryURL = 'http://www.mapquestapi.com/geocoding/v1/address?key=DFacdC8YGDXMAokPqwGxGK7PSTV8xHSI' + '&location=' + cityState;
       //ajax to call to write results of lat long to div id=latlong-view
       $.ajax({
         url: queryURL,
         method: 'GET'
       }).then(function(response) {
         $('#jsonResponse').text(JSON.stringify(response));
          console.log(response);
         lat = response.results[0].locations[0].latlng[0].lat;
         console.log(lat);
         lng = response.results[0].locations[0].latlng[0].lng;
         console.log(lng);
         latLng = "https://api.yelp.com/v3/businesses/search?text=restaurant&latitude=40.569710&longitude=-111.897278";
       });
      });