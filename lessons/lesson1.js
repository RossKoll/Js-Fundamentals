// 1. hello world
console.log("hello world via JavaScript");

// 2. variables and data types
var firstName = "John";
let lastName = "Doe";
console.log("hello my dear frind " + firstName + " " + lastName);

// 3.data types
var emptyVar = null;
var undefinedVar;
console.log("empryVar: " + typeof emptyVar);
console.log("undefinedVar: " + typeof undefinedVar);

// 4. Concatenation and Interpolation
var price = 50
var itemName = "Cup"
var message = "The price of your " + itemName + " is " + price + " dollars"; // concatenation
console.log(message);

var messageToPrint = `The price of your ${itemName} is ${price} dollars`; // interpolation
console.log(messageToPrint);


