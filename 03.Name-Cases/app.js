"use strict";
// Question-03
// Name Cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase.

let myName = "Ubaid khan"; // This saves the name
console.log(myName.toLowerCase()); // Shows the name in all small letters
console.log(myName.toUpperCase()); // Shows the name in all BIG LETTERS
console.log(myName.replace(/\b\w/g, (char) => char.toUpperCase())); // Shows the name with the First Letter Big
