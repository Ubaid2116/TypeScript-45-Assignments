"use strict";
// Question 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Answer
function makeShirt(size, text) {
    console.log(`\n you order a ${size} shirt that says ${text}`);
}
makeShirt("large", '"i love javascript"');
makeShirt("medium", '"i love HTML & CSS"');
