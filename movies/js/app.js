/**
 * app.js
 * main application script
 * this is included in index.html
 */
"use strict";

/**
 * renderMovieProp creates and returns a new <td> element for a
 * value, and optionally marks it as non-numeric
 * @param {string|number} value the value to put into the <td>
 * @param {boolean} [nonNumeric] if set to true, indicates this property is non-numeric
 * (add the `mdl-data-table__cell--non-numeric` style class to the <td> so that it is left-aligned)
 * see https://getmdl.io/components/index.html#tables-section
 * @returns {Object} new, populated <td> element
 */
function renderMovieProp(value, nonNumeric) {
    //create, populate, and return a new <td> element
    var td = document.createElement("td");
    td.textContent = value;
    if (nonNumeric){
        td.classList.add("mdl-data-table__cell--non-numeric");
    }
    return td;
}

/**
 * renderMovie creates and returns a new <tr> element containing
 * <td> elements for the title, sales, and tickets properties of the
 * `movie` object.
 * @param {Object} movie the movie object
 * @returns {Object} a new, populated <tr> element 
 */

function renderMovie(movie) {
    //create <tr> element
    var tr = document.createElement("tr");

    //use renderMovieProp() to create <td> elements for
    //the title, sales, and tickets props and append them
    //to the <tr> element 
    var td1 = renderMovieProp(movie.title, true);
    tr.appendChild(td1);
    var td2 = renderMovieProp(movie.sales);
    tr.appendChild(td2);
    var td3 = renderMovieProp(movie.tickets);
    tr.appendChild(td3);
    
    //return the <tr> element
    return tr;
}

/**
 * renderMovies clears the contents of the <tbody> element
 * and then appends one fully-populated <tr> element for each
 * element in the `movies` array
 * @param {Object[]} movies an array of movie objects
 */
function renderMovies(movies) {
    //clear any existing content within the <tbody> element
    var tbody = document.querySelector("tbody");
    tbody.textContent = "";

    //for each element in the movies array

    //use renderMovie() to create a full-populated <tr> element
    //and append that to the <tbody> elemnet already in the page
    movies.forEach(function(m){
        var tr = renderMovie(m);
        tbody.appendChild(tr);
    });
}

//render all of the movies
MOVIES.sort(function(record1, record2){
    return -record1.sales+record2.sales;
});

renderMovies(MOVIES);

var userInput = document.querySelector(".mdl-textfield__input");
userInput.addEventListener("input", function() {
    var text = userInput.value.toLowerCase();
    var filtered = MOVIES.filter(function(m){
        var title = m.title.toLowerCase();
        if (title.indexOf(text) != -1){
            return true;
        }
        return false;
    });
    renderMovies(filtered);
});

