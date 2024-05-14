// Question-06
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let myName: string = "\n\t Muhammad Ubaid\t\n"; // This saves the with whitespace
console.log(myName); // Shows the name with whitespace 
console.log(myName.trim()); // Shows the name without whitespace
