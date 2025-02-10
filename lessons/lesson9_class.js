
import { customerDetails } from "../helpers/printHelper.js";


customerDetails.printFirstName("Jonny");
customerDetails.printLastName("Depp");

console.log(typeof customerDetails); // object

let familySize = 5;
let plannedDistanceToDrive = 300;

function recommendedCar(familySize) {

if (familySize < 5 && plannedDistanceToDrive < 200) {
    return "Tesla"
}else if(familySize < 5 && (plannedDistanceToDrive == 200 || plannedDistanceToDrive > 200)) {
    return "Toyota Camry"
}else if(familySize > 4) return "Minivan"
}

console.log(recommendedCar(familySize, plannedDistanceToDrive)); 

const user = {
    username: 'Jonny',
    age : 45,
}

//reference value of object
const user23 = user;
console.log(" user name of second user " + user23.username);

user23.username = 'Depp';
console.log ("user name of second user after update the first " + user23.username);

//value type of object
let num1 = 10;
let num2 = num1
console.log("number two " + num2);

num1 = 20;
console.log("number two after update the first " + num2);

class Person {
    constructor (firstName, secondName){
        this.name = firstName;
        this.name2 = secondName;
    }

    fullname() {
        return this.name + " " + this.name2}
}

let person = new Person("Jonny", "Depp");
console.log("Person first namme " + person.name);
console.log("person full name " + person.fullname())

console.log('1: Start making sendwich ')

setTimeout (()=> {
    console.log('2: Bread is toasted')},
    1000
)

console.log('3: Add topping')


setTimeout(()=> 2000)


function orderPizza() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let pizzaReady = true; // Change to false to simulate rejection
  
        if (pizzaReady) {
          resolve("🍕 Pizza is ready!");
        } else {
          reject("❌ Sorry, no pizza today.");
        }
      }, 3000);  // Wait 3 seconds
    });
  }
  
  // Using the Promise
  orderPizza()
    .then((message) => console.log(message))  // If resolved
    .catch((error) => console.log(error));   // If rejected
  
  console.log("Waiting for pizza...");
  
// expaining with await
  async function getPizza() {
    console.log("Ordering pizza...");
    try {
      let result = await orderPizza();  // Wait for the promise to resolve
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  
  getPizza();