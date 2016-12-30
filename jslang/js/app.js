/**
 * app.js
 * main application script
 * this is already included in index.html
 * do all of your coding in this file
 */

//switch interpreter into strict mode (always a good idea)
//se http://www.w3schools.com/js/js_strict.asp
"use strict";

/**
 * getName returns your name as a string
 * @returns {string} your name
 */
function getName() {
    //return your name as a string

}

/**
 * getGreeting returns the string "Hello name"
 * where `<name>` is the value of the `name`
 * parameter
 * @returns {string} a greeting for `name`
 */
function getGreeting(name) {
    //return a string with the value "Hello name"
    //where `name` is replaced with the value of
    //the `name` parameter

}

/**
 * getBirthdate returns your birthdate as a string,
 * in the format "YYYY-MM-DD" (ISO format)
 * @returns {string} your birthdate in ISO format
 */
function getBirthdate() {
    //return your birthdate as a string in the
    //the format "YYYY-MM-DD"

}

/**
 * canDrinkAlcohol returns true if the value
 * passed as the `age` parameter is 21 or over
 * otherwise it returns false
 * @param {number} age an age to test
 * @returns {boolean} true if 21 or over, false if not
 */
function canDrinkAlcohol(age) {
    //return true if `age` is 21 or over
    //otherwise return false

}

/**
 * getMovie returns the element from `moviesArray`
 * at the given `index`
 * @param {Object[]} moviesArray the array of movies
 * @param {number} index the element index to get
 * @returns {Object} the movie object at the given `index` in the array
 */
function getMovie(moviesArray, index) {
    //return the movie object at the given index in the `moviesArray`

}

/**
 * getMovieCitation returns a citation (of sorts) for
 * a given `movie` object. The citation should be in the format:
 * 
 *   title (year-released, distributor)
 * 
 * Remember that `movie` is an object with the properties you
 * see in the js/movies-2015.js file: title, released, distributor, etc.
 * Note that the released property is an ISO-formatted date, just like the
 * birthdate you returned above. To get just the year from this date, use
 * the substr() method of the string to get just the first four characters.
 * See http://www.w3schools.com/jsref/jsref_substr.asp
 * 
 * @param {Object} movie a movie object
 * @returns {string} a citation for the movie object
 */
function getMovieCitation(movie) {
    //return a citation in the format:
    // title (year-released, distributor)

}

/**
 * findMovieWithMostSales returns the movie object from
 * `moviesArray` that has the largest value for its `sales`
 * property. You will need to loop through all elements of
 * the array and compare the `sales` property of each object
 * to a variable that is set to the element with the largest
 * `sales` value so far. Once you are done with the loop,
 * your variable will hold the movie with the largest sales.
 * Return that value.
 * 
 * @param {Object[]} moviesArray an array of movie objects
 * @returns {Object} the movie object from the array with the largest `sales` property
 */
function findMovieWithMostSales(moviesArray) {
    //return movie object from `moviesArray`
    //that has the largest value for the `sales` property
}

/**
 * DO NOT change code below here. These statements call
 * the functions you implemented above and write the output
 * to the console log. If you get an error on any of the lines
 * below, you are not returning the correct value from the function
 * it calls. Change the function implementation, not this code.
 */
console.log("Your name is %s", getName());
console.log("%s, welcome to programming in JavaScript!", getGreeting(getName()));
console.log("You are %d years old", moment().diff(getBirthdate(), "years"));
console.log("Are you allowed to drink alcohol?", canDrinkAlcohol(moment().diff(getBirthdate(), "years")));
console.log("There are %d movies in the array", MOVIES.length);
var randIndex = Math.floor(Math.random() * MOVIES.length);
console.log("A random movie object from the array (will change each refresh):", getMovie(MOVIES, randIndex));
console.log("A citation for that random movie:", getMovieCitation(getMovie(MOVIES, randIndex)));
console.log("Movie with most sales:", getMovieCitation(findMovieWithMostSales(MOVIES)));
