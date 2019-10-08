<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">

  <style type="text/css">
    button,
    div,
    form,
    input {
      margin: 10px;
    }
  </style>

  <!--Reset CSS-->
  <link rel="stylesheet" href="assets/css/reset.css">

  <!--Media Query-->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <!-- jQuery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <!-- Original CSS -->
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">

  <title>Taste in Movies</title>
</head>

<body>
  <div class="container">
    <h1>Food Search</h1>

    <!-- Rendered Buttons will get Dumped Here  -->
    <div id="buttons-view"></div>


    <!-- GET https://api.yelp.com/v3/businesses/search
      f8jhYkMcsjmXcHT9h6iQcw
    GET https://api.yelp.com/v3/autocomplete?text=del&latitude=40.569710&longitude=-111.897278 -->

    <div class="container">
      <h1>Movie Search</h1>

      <!-- Rendered Buttons will get Dumped Here  -->
      <div id="buttons-view"></div>

      <form id="movie-form">
        <label for="movie-input">Add a Movie, Yo!</label>
        <input type="text" id="movie-input"><br>

        <!-- Button triggers new movie to be added -->
        <input id="add-movie" type="submit" value="Add a Movie, Yo!">
      </form>

      <!-- Movies will Get Dumped Here -->
      <div id="movies-view"></div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script type="text/javascript">
        // Initial array of movies
        var movies = ["Batman"];
        var cors = 'https://cors-anywhere.herokuapp.com/'
        // Function for dumping the JSON content for each button into the div
        function displayMovieInfo() {

          var movie = $(this).attr("data-name");
          var queryURL = "https://api.yelp.com/v3/businesses/search?text=restaurant&latitude=40.569710&longitude=-111.897278";

          $.ajax({
            url: cors + queryURL,
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Authorization": "Bearer 5psQHIfkM7fl7doyCrG3wpQjmW2BoXwXIuMbP6mXcCzg9nalp5PiQ9p6NNcMdCe81V1sGg52yZRGH7OPUoL0o_9oPv1yDPV08swWpK0PQ962x3COTKeABdapYMeSXXYx"
            },
          }).then(function (response) {
            $("#movies-view").text(JSON.stringify(response));
            console.log(response);
            for (let i = 0; i < response.businesses.length; i++) {
              var rating = response.businesses[i].rating;
              var establishment = response.businesses[i].name;
              var url = response.businesses[i].url;
              // var rating = response.businesses[i].rating;
              // var rating = response.businesses[i].rating;
              // var rating = response.businesses[i].rating;

            console.log(rating);
            console.log(establishment);
            console.log(url);
            }
          });
        }

        // https://api.yelp.com/v3/businesses/{id}/reviews

        // Function for displaying movie data
        function renderButtons() {

          // Deleting the buttons prior to adding new movies
          // (this is necessary otherwise you will have repeat buttons)
          $("#buttons-view").empty();

          // Looping through the array of movies
          for (var i = 0; i < movies.length; i++) {

            // Then dynamically generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class of movie to our button
            a.addClass("movie");
            // Adding a data-attribute
            a.attr("data-name", movies[i]);
            // Providing the initial button text
            a.text(movies[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
          }
        }

        // This function handles events where one button is clicked
        $("#add-movie").on("click", function (event) {
          event.preventDefault();

          // This line grabs the input from the textbox
          var movie = $("#movie-input").val().trim();

          // Adding the movie from the textbox to our array
          movies.push(movie);
          console.log(movies);

          // Calling renderButtons which handles the processing of our movie array
          renderButtons();
        });

        // Function for displaying the movie info
        // Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
        $(document).on("click", ".movie", displayMovieInfo);

        // Calling the renderButtons function to display the initial buttons
        renderButtons();




      </script>
    </div>
</body>

</html>