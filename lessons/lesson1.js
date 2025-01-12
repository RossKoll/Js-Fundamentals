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

// 4. arrays
let myArr = [1, 2, 3, 4, 5];
myArr.shift(0);
console.log("new array after deleting firat element by 'shift()' mmethod: " + myArr);
console.log("length of the array: " + myArr.length);

myArr.push(6);
console.log("new array after adding element by 'push()' mmethod: " + myArr);
console.log("length of the array: " + myArr.length);


// 5. Concatenation and Interpolation
var price = 50
var itemName = "Cup"
var message = "The price of your " + itemName + " is " + price + " dollars"; // concatenation
console.log(message);

var messageToPrint = `The price of your ${itemName} is ${price} dollars`; // interpolation
console.log(messageToPrint);

// new comment after the restriction was added  to the master branch
console.log("new comment after the restriction was added  to the master branch");

// 6. Objects
var customer = {
    firstName: "John",
    lastName: "Doe",
}
console.log(customer["firstName"]);
console.log("Customer: " + customer.firstName + " " + customer.lastName);



