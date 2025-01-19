//functions
function helloWorld(){
    console.log('Hello World');
}

helloWorld();

// anonymous function
var helloTwo = function(){
    console.log('Hello Two');
}

helloTwo();

//ES6 arrow function
var helloThree = () => {
    console.log('Hello Three');
}
helloThree();

var sumTwoNumber = () => 10 + 50;
console.log("sum of two numbers: " + sumTwoNumber());

// function with parameters
function printName(name){
    console.log(`hello my dear ${name} felas`);
}
printName("Jonny")

// function with parameters and return value
function sumtiplyByTwo(num){
    let result = num * 2;
    return result;
}
console.log(sumtiplyByTwo(10));

//importing function from another file
// import { printGreating } from "../helpers/printHelper.js";
// printGreating("Monika");

//import everything from another file
import * as help from "../helpers/printHelper.js";
help.printGreating("Volanda");