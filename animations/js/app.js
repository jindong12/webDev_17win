/**
 * app.js
 * main application script
 */
"use strict";

/**
 * use document.querySelector() to get references to the following
 * and store the results in variables:
 * - the <input id="name-input"> 
 * - the <p class="name-output"> element
 * - the <select id="animation-select"> element
 * - the <button id="animate-button"> element
 */

var nameInput = document.querySelector("#name-input");
var nameOutput = document.querySelector(".name-output");
var animationSelect = document.querySelector("#animation-select");
var animateButton = document.querySelector("#animate-button");

/**
 * add an event listener for the "input" event on the name-input.
 * whenever that event occurs, update the text content of the name-output
 * to be "Hello, " + the value of the input.
 * if the input value is zero-length, just clear the text content
 */

nameInput.addEventListener("input", function(){
    var text = nameInput.value;
    if (text.length == 0){
        nameOutput.textContent = "";
    }else{
        nameOutput.textContent = "Hello, " + text;
    }
});


/**
 * add an event listener for the "click" event on the animate button.
 * whenever that occurs, get the selected animation name from the 
 * animation-select and add that animation name to the class list
 * on the name-ouput element.
 * to enable animating the element more than once, add a one-time
 * event listener for the "animationend" event on the name-ouput
 * element, and remove the animation name from the class list.
 * that way, when you add the animation name to the class list again, 
 * the animation will occur.
 */

animateButton.addEventListener("click", function(){
    var selected = animationSelect.options[animationSelect.selectedIndex].value;
    nameOutput.classList.add(selected);

    nameOutput.addEventListener("animationend", function(){
        nameOutput.classList.remove(selected);
    }, {once: true});
});
