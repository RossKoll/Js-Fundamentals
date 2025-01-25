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

var helloThere2 = greating => console.log(greating);
helloThere2("Hello from arrow function 2");

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

help.printTwoDigitsSum(10,2,5);

//spread operator

var arr = [2, 5]
function sumTwoNumbers(a,b){
    return a + b;
}
console.log("Sum of tow number using 'spread' opearotor : " + sumTwoNumbers(...arr));
console.log(sumTwoNumbers(arr)); // 2,5undefined