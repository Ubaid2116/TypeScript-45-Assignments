"use strict";
// Question 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Answer
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["ubaid", "hammad", "muqeet"];
show_magicians(magician);
// Question 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Answer
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        // i stands for index string
        magicians[i] = magicians[i] + " The Great";
    }
}
const magicians2 = ["ubaid", "hammad", "muqeet"];
make_great(magicians2);
show_magicians(magicians2);
// Question 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Answer
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + "  The Great");
    }
    return greatMagicians;
}
const magicians3 = ["ubaid", "hammad", "muqeet"];
const greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
