// Question 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Answer

// Tests for equality and inequality with strings

let name_1 : string = "Ubaid"
let name_2 : string = "Muhammad Ubaid"
let name_3 : string = "Muhammad Ubaid Hussain"
if (name_1 == name_3){
    console.log("names are equal")
}
else{
    console.log("names are not equal")
}
if (name_1 != name_2){
    console.log("names are equal")
}
else{
    console.log("names are not equal")
}
// Tests using the lower case function

 if (name_1 != name_3){
     console.log("names are equal")
 }
// NUMERICAL TESTS

let age_1 : number = 20
let age_2 : number = 22
if (age_1 == 20){
    console.log("eligible for taking ride")
}
if (age_1 != 22){
       console.log("eligible for taking ride in amusement park")
 }
if (age_1 <= age_2){     //less 
    console.log("younger")
}
if (age_2 >= age_1){      //greater
    console.log("older")
}
// TEST USING AND & OR OPERATORS

if (age_1 == 20 && age_2 == 22){
    console.log("person is eligible for vote")
}
if (age_1 == 20 || age_2 != 22){
    console.log("person is not eligible for vote")
}
// TEST WHETHER ITEMS IN ARRAY

let Mountains : string [] = ["Mount Everest","K2","Himalayas","Nanga parbat","Mount Elbrus"]
if (Mountains.includes("Mount Everest")){
    console.log("Mount Everest is in mountain list")
}
// TEST whether items not in an array

if (!Mountains.includes("Mount Fuji")){
    console.log("Mount Fuji is not includes in an array")
}


