// This cors variable prevents yelp from asking for a database (no I don't understand this completely)
var cors = 'https://cors-anywhere.herokuapp.com/';

var queryURL = "https://api.yelp.com/v3/businesses/"
// These are initial variables used by a different team
var input = $(".testInput").text()
var city = $(".city").text() + "/rating";
var parsedCity = city.toLocaleLowerCase().split(" ").join("-");
var parsedInput = input.toLocaleLowerCase().split(" ").join("-");
$.ajax({
   url: cors + queryURL + parsedInput + "-" + parsedCity,
   method: "GET",
   headers: {
       "Access-Control-Allow-Origin": "*",
       "Authorization": "Bearer 5psQHIfkM7fl7doyCrG3wpQjmW2BoXwXIuMbP6mXcCzg9nalp5PiQ9p6NNcMdCe81V1sGg52yZRGH7OPUoL0o_9oPv1yDPV08swWpK0PQ962x3COTKeABdapYMeSXXYx"
   },
}).then(res => {
   console.log('res', res)
}).catch(err => {
   console.log('err', err)
})