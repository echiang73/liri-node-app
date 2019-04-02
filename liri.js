const dotenv = require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require('fs');
var moment = require("moment");

var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

switch (command) {
    case "concert-this":
        concertThis(userInput);
        break;
    case "spotify-this-song":
        spotifyThis(userInput);
        break;
    case "movie-this":
        movieThis(userInput);
        break;
    case "do-what-it-says":
        doIt();
        break;
    default:
        console.log("Try again and enter a command");
};

function concertThis(userInput) {
    // We then run the request with axios module on a URL with a JSON
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(
        function (response) {
            // Then we print out the responses
            // console.log(response.data[0]);
            console.log("--------------- Bands In Town Info ---------------");
            for (var i = 0; i < response.data.length; i++) {
                // Name of the venue
                console.log("Venue #" + [i + 1] + ": " + response.data[i].venue.name);
                // Venue location
                console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
                // Date of the Event (use moment to format this as "MM/DD/YYYY")
                console.log("Date: " + moment(response.data[i].datetime, "").format("MM/DD/YYYY"));
            }
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function spotifyThis(userInput) {
    var spotify = new Spotify(keys.spotify);
    if (!userInput) {
        userInput = "The Sign Ace of Base";
    }
    spotify.search({ type: 'track', query: userInput }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // console.log(data);
        var songInfo = data.tracks.items[0];
        // console.log(data.tracks.items[0]);
        console.log("--------------- Spotify Song Info ---------------");
        console.log("Artist(s): " + songInfo.artists[0].name);
        console.log("Song Name: " + songInfo.name);
        console.log("Preview Link: " + songInfo.preview_url);
        console.log("Album: " + songInfo.album.name);
    });
}

function movieThis(userInput) {

    if (!userInput) {
        userInput = "Mr. Nobody";
        console.log("If you haven't watched Mr. Nobody, then you should: <http://www.imdb.com/title/tt0485947/>");
        console.log("It's on Netflix!");
    }
    // We then run the request with axios module on a URL with a JSON
    axios.get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            // Then we print out the imdbRating
            // console.log(response.data);
            console.log("--------------- OMDB Movie Info ---------------");
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function doIt(userInput) {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
        // console.log(data);
        // console.log(dataArr);
        // console.log(dataArr[1].slice(1));
        userInput = dataArr[1].slice(1);

        if (dataArr[0] === "concert-this") {
            concertThis(userInput);
        }
        else if (dataArr[0] === "spotify-this-song") {
            spotifyThis(userInput);
        }
        else if (dataArr[0] === "movie-this") {
            movieThis(userInput);
        }
    });
};