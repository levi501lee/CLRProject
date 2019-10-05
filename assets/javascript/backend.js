// CLR Project 1
// Back-end functionality javascript for Taste in Movies
// backend.js

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

//Initialize database
let database = firebase.database();

//Get a reference from the first modal form
const getLaidForm = document.querySelector('#getLaidForm');

$('#getLaid').on('click', function () {

    let street = $('#street').val().trim();
    let city = $('#city').val().trim();
    let state = $('#state').val().trim();
    let zip = $('#zip').val().trim();
    let movieType = $('#movieType').val().trim();
});

$('#worstDate').on('click', function () {


});