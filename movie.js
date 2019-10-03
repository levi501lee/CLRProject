// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBacTRmU5vpq0G3QHqJ6yRS1MBjDKgmcW4",
    authDomain: "clrproject.firebaseapp.com",
    databaseURL: "https://clrproject.firebaseio.com",
    projectId: "clrproject",
    storageBucket: "clrproject.appspot.com",
    messagingSenderId: "561191338086",
    appId: "1:561191338086:web:e03f2b1ea925491748ada7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
var database = firebase.database();

// I need to know the #searchTerm and the #searchTerm-input used in the HTML
$("#searchTerm").on("click", function () {
    var searchTerm = $("#searchTerm-input").val().trim();
    event.preventDefault();
    console.log(searchTerm);

    // The search OMDB function takes a movie, searches the omdb api for it, and then passes the data to DiningSearch
    var searchOMDB = function (searchTerm) {
        var queryURL = "https://www.omdbapi.com/?t=" + searchTerm + "&apikey=9078b5fd";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // TitleSearch(response);  this doesn't work yet
            console.log(response);
            var title = response.title;
            var genre = response.Genre;
            var metascore = response.Metascore;
            console.log(title);
            console.log(genre);
            console.log(metascore);


            database.ref().set({
                title,
                genre,
                metascore,
            });
        });
    };



    // Search the OMDB API for the users movie genre and metascore
    searchOMDB(title);
});


 // This "document.ready" code isn't necessary in this example... but is useful to become familiar with.
 // "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
// $(document).ready(function () { }

