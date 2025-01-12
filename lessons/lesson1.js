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


// 7. relational or comparison operators
var a = 10;
var b = "10";
console.log(a == b); // true. only value is compared. loose comparison
console.log(a === b); // false. value and type are compared. strict comparison

// 8. logical operators
console.log(false || true); // true
console.log(true || false); // true

// 9. if else statement
var isRaining = true;
if (isRaining) {
    console.log("Take an umbrella");
} else {
    console.log("Leave your umbrella at home");
}

var hour = 5;
if (hour >=6 && hour < 12) {
    console.log("Good morning");
}else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon")}
else {
        console.log("Good evening")
}
