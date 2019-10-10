// CLR Project 1
// Authorization and modal functionality javascript for Taste in Movies
// backend.js



/////////////////////////////FIREBASE///////////////////////////////////////////////////////

// Your web app's Firebase configuration
let firebaseConfig = {
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
let movieTitle = "";
let metaScore = "";
let isGetLaid = false;
let isWorstDate = false;
let isFoodToo = false;

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
$('#getLaidSubmit').on('click', () => { getUserValues('#gl'); });
$('#worstDateSubmit').on('click', () => { getUserValues('#wd'); });
$('#leviSubmit').on('click', () => {
  //
});

// Passes values from whichever modal is referenced
function getUserValues(prefix) {
  this.event.preventDefault();

  street = $(prefix + 'Street').val().trim();
  city = $(prefix + 'City').val().trim();
  state = $(prefix + 'State').val().trim();
  zip = $(prefix + 'Zip').val().trim();
  movieTitle = $(prefix + 'MovieTitle').val().trim();

  console.log("street " + street);
  console.log("city " + city);
  console.log("state " + state);
  console.log("zip " + zip);
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
    title: movieTitle
  });
}

// 1st Modal ("Get Laid")

var modal1 = document.getElementById("getLaidForm");
var btn1 = document.getElementById("getLaidBtn");
var span1 = document.getElementsByClassName("close1")[0];
var glSubmit = document.getElementById("getLaidSubmit");
var glCancel = document.getElementById("getLaidCancel");
btn1.onclick = function () {
  modal1.style.display = "block";
}
span1.onclick = function () {
  modal1.style.display = "none";
}
glSubmit.onclick = function () {
  modal1.style.display = "none";
}
glCancel.onclick = function () {
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
var wdSubmit = document.getElementById("worstDateSubmit");
var wdCancel = document.getElementById("worstDateCancel");
btn2.onclick = function () {
  modal2.style.display = "block";
}
span2.onclick = function () {
  modal2.style.display = "none";
}
wdSubmit.onclick = function () {
  modal2.style.display = "none";
}
wdCancel.onclick = function () {
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
var lSubmit = document.getElementById("leviSubmit");
var lCancel = document.getElementById("leviCancel");
btn3.onclick = function () {
  modal3.style.display = "block";
}
span3.onclick = function () {
  modal3.style.display = "none";
}
lSubmit.onclick = function () {
  modal3.style.display = "none";
}
lCancel.onclick = function () {
  modal3.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


/////////////////////////API////////////////////////////////////////////

// Converts a movie's meta score into a 5-star rating
function movieRating() { return Math.floor(metaScore / 20); }

// Click event for the "get laid" modal submit button
$('#getLaidSubmit').on('click', (event) => { modalClickEvent(event, "gl"); });
// CLick event for the "worst date" modal submit button
$('#worstDateSubmit').on('click', (event) => { modalClickEvent(event, "wd"); });

// Handles the API calls for the first 2 modal forms
function modalClickEvent(e, modalRef) {

  e.preventDefault();

  // Pass user values from the DOM
  let streetVal = $('#' + modalRef + 'Street').val().trim();
  let cityVal = $('#' + modalRef + 'City').val().trim();
  let stateVal = $('#' + modalRef + 'State').val().trim();
  let zipVal = $('#' + modalRef + 'Zip').val().trim();
  let movieTitle = $('#' + modalRef + 'MovieTitle').val().trim();

  console.log(streetVal);
  console.log(cityVal);
  console.log(stateVal);
  console.log(zipVal);
  // Remove the error statement
  if ('.error') { $('.error').remove(); }

  // Validity check for user input
  if (streetVal.length < 1) {
    $('#errorMsgContainer').append('<span class=" error">The STREET field is required</span>');
  }
  if (cityVal.length < 1) {
    $('#errorMsgContainer').append('<span class=" error">The CITY field is required</span>');
  }
  if (stateVal.length < 1) {
    $('#errorMsgContainer').append('<span class=" error">The STATE field is required</span>');
  }
  if (zipVal.length != 5) {
    $('#errorMsgContainer').append('<span class=" error">The ZIP Code must be 5 digits long</span>');
  }

  // Here we grab the text from the input box
  let cityState = city + "," + state;

  // AJAX call for MapQuest API, inserting the city and state for the query
  $.ajax({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=DFacdC8YGDXMAokPqwGxGK7PSTV8xHSI' + '&location=' + cityState,
    method: 'GET'
  }).then((response) => {
    //$('#jsonResponse').text(JSON.stringify(response));
    let lat = response.results[0].locations[0].latLng.lat;
    let lng = response.results[0].locations[0].latLng.lng;
    let latLngURL = 'https://api.yelp.com/v3/businesses/search?text=restaurant&latitude=' + lat + '&longitude=' + lng;
    let cors = 'https://cors-anywhere.herokuapp.com/';

    // AJAX to reference Yelp! and pass the latLng so we can retrieve restaurant data
    $.ajax({
      url: cors + latLngURL,
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer jvAnEan6_NDe82bFMxKAxFB-uW__ZUQqDpYnw4pM4FB93jAh9kZpTDlRa4tL0GmZ6kbLVbGcumgzs0oDEjSozUI9VRPB07LimgLpCBMtVtpN-A_aadIkZM2lGFSdXXYx"
      },
    }).then((response) => {

      let movie = $('#movieTitle').val().trim();
      console.log('movie ' + movieTitle);
      var queryURL = "https://www.omdbapi.com/?t=" + movieTitle + "&apikey=trilogy";

      // AJAX to reference OMDB to find a movie based on title selected
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then((response) => {

        // Storing the data
        let rating = response.Rated;
        let title = response.Title;
        let plot = response.Plot;
        console.log(response);
        console.log(rating);
        console.log(title);
        console.log(plot);
        // Display the title
        $('#movieTitle').text(movieTitle);

        // Displaying the rating
        $('#movieRating').text('Rated: ' + rating);

        // Display the plot info
        $('#movieTxt').text(plot);

        // Retrieving the URL for the image
        let imgURL = response.Poster;

        // Hold the image
        $("#moviePoster").attr("src", imgURL);
      });

      // Random index returned from matched restaurant ratings within the loop below
      let indexArr = Array.from({ length: response.businesses.length }, () => Math.floor(Math.random() * 20) + 1);
      // Temp array to hold top 3 possible choices for restaurants
      let possibleYelpsArr = [];
      console.log(response);
      // Loop through the 20 restaurants returned from the API to find the match
      for (let i = 0; i < response.businesses.length; i++) {

        // We just needed the rating to test
        let yelpRating = response.businesses[i].rating;

        // See if current restaurant's rating matches the movie's rating
        if (movieRating(rating) === yelpRating) {

          // Push another candidate onto the temp array
          possibleYelpsArr.push(response.businesses[i]);

          if (possibleYelpsArr.length === 3) {

            let yelpEstablishment = response.businesses[indexArr].name;
            let yelpUrl = response.businesses[indexArr].url;
            let yelpImage = response.businesses[indexArr].image_url;
            let yelpPhone = response.businesses[indexArr].phone;
            let yelpStreet = response.businesses[indexArr].location.address1;
            let yelpCity = response.businesses[indexArr].location.city;
            let yelpState = response.businesses[indexArr].location.state;
            let yelpZip = response.businesses[indexArr].location.zip_code;

            $('#foodPoster').attr('src', yelpImage);
            $('#foodName').text(yelpEstablishment);
            $('#foodAddress').text(yelpStreet);
            $('#foodCity').text(yelpCity);
            $('#foodState').text(yelpState);
            $('#foodZip').text(yelpZip);
            $('#foodPhone').text(yelpPhone);
          }
        }
      }
    });
  });
}
