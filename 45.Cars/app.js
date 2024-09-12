"use strict";
// Question 45
function createCar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const mycar = createCar("Honda", "Civic", {
    color: "black",
    year: "2022",
});
console.log(mycar);
// ALL ASSIGNMENTS HAS BEEN COMPLETED!!
