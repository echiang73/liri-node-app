# LIRI Bot Node App

## Overview
Welcome to my first backend app, LIRI Bot. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


## How to Run LIRI-Bot:

1. Clone down repository.
2. Navigate to the root of your project and run `npm init` to install the required versions of third party npm packages as instructed in the `package.json` file.
3. Run command `node liri.js` with one of the commands below.
   * `concert-this`
   * `spotify-this-song`
   * `movie-this`
   * `do-what-it-says`


## Detail Instructions and Output:
1. Option 1: `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API for an artist/band and render the following information about each event to the terminal/bash window:
        ```
        * Name of the venue
        * Venue location
        * Date of the Event
        ```

2. Option 2: `node liri.js spotify-this-song '<song name here>'`

    * This will search the Spotify API and render the following information about the song to the terminal/bash window: 
        ```
        * Artist(s) 
        * The song's name 
        * A preview link of the song from Spotify 
        * The album that the song is from

        If no song is provided then the program will default to "The Sign" by Ace of Base.
        ```

3. Option 3: `node liri.js movie-this '<movie name here>'`

   * This will OMDB API and render the following movie information to the terminal/bash window:

        ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

       If no movie is provided, the program will provide the recommendation with an output data for the movie 'Mr. Nobody.'
        ```

4. Option 4: `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will output the command placed in `random.txt` file.
   * By default, it will run `spotify-this-song` for "I Want it That Way,".
   * Edit the text in `random.txt` file to test out the feature for other commands: movie-this and concert-this.


## Built with:
* JavaScript
* Node.js
* Node Package Manager (npm)
* API calls

## npm packages: 
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api) - A simple to use API library for the Spotify REST API.
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js.
* [OMDB API](http://www.omdbapi.com) -A node.js and browser client for OMDb API to obtain movie information.
* [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api) - API allows any app to display the information on local concerts and live music recommendations.
* [Moment](https://www.npmjs.com/package/moment) - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
* [DotEnv](https://www.npmjs.com/package/dotenv) - Dotenv store your sensitive credentials and load in environment variables in .env file to merge into your process.env runtime variables.


## Author
* Eddie Chiang
* Click on the GitHub link!
https://github.com/echiang73/liri-node-app


## Here is the preview of the node application:

![](assets/images/webpreview.gif "gif")

