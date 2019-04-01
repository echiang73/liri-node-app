const dotenv = require("dotenv").config();
var keys = require("./keys.js");
// var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require('fs');
// var moment = require("moment");

// var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

switch (command) {
	// case "concert-this":
	// concertThis(userInput);
	// break;
    case "spotify-this-song":
    spotifyThis(userInput);
	break;
    // case "movie-this":
    // movieThis(userInput);
	// break;
	// case "do-what-it-says":
	// doIt();
    // break;
    default:
        console.log("Try again and enter a command");
};


function spotifyThis(userInput) {
	var spotify = new Spotify(keys.spotify);
		if (!userInput){
        	userInput = "The Sign Ace of Base";
    	}
		spotify.search({ type: 'track', query: userInput }, function(err, data) {
            if (err){
                return console.log('Error occurred: ' + err);
            }

        // console.log(data);
        var songInfo = data.tracks.items[0];
        // console.log(data.tracks.items[0]);
        console.log("Artist(s): " + songInfo.artists[0].name);
        console.log("Song Name: " + songInfo.name);
        console.log("Preview Link: " + songInfo.preview_url);
        console.log("Album: " + songInfo.album.name);
	});
}








