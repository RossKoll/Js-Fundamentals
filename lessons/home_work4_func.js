let number1 = 1;
let number2 = 2;
var operaator = "+";

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @param {string} operator 
 * @returns 
 */
function calc(num1 = 0, num2 = 0, operator = "+") {
    switch (operator) {
        case "+": return num1 + num2;
        case "-" : return num1 - num2;
        default : return num1 + num2;
    }
}
console.log(calc()); 
console.log(calc(number1, number2, operaator)); // 3

function sumOfTwoNumber2(a, b){
    return a + b;
}

let arr = [];
for (var i = 0; i < 10; i++){
    var response;
    var num = i * 5;
    var num2 = i * i;
    response = sumOfTwoNumber2(num, num2);
    arr.push(response);
}

console.log(arr);// [0, 6, 14, 24, 36, 50, 66, 84, 104, 126]

function twoGlobalVariables(){
    x = "Guess what I am global variable : ";
    console.log("Inside function: " , x);
}

twoGlobalVariables();
console.log("Outside function: " , x); // Guess what I am global variable