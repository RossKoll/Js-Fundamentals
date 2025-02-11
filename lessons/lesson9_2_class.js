class Person{
    #firstName;
    #lastName;

    constructor(name, surename){
        this.#firstName = name;
        this.#lastName = surename;
    }

    set firstName(name){
        this.#firstName = name;
    }

    get getfirstName(){
        return this.#firstName
    }

}

let person1 = new Person("Barbara", "Streisand");
console.log(person1.firstName);

class Animal{
    constructor(name){
        this.name = name;
    }

    sound(){
        console.log(this.name + " Animal sound");
    }
}

Animal.prototype.walk = function(){ // Add method to class by PROTOTYPE
    console.log(this.name + " Animal walk");
}

let cat = new Animal("Cat");
cat.sound();
cat.walk();

// Employee tracking app

class Employee{
    constructor(firstName, lastName, numberOfYears){
        this.firstName = firstName;
        this.lastName = lastName;
        this.numberOfYears = numberOfYears;
    }
}

let employee1 = new Employee("Amanda", "Monro", 5);
let employee2 = new Employee("Barbara", "Tottie", 10);

let employees = [employee1, employee2];

Employee.prototype.getDetails = function(){
    return this.firstName + " " + this.lastName + " " + this.numberOfYears;
}

for (let employee of employees){
    console.log(employee.getDetails());
}


// Menu items price calculator

class MenuItem{
    
    #price1;  
    #price2;

    constructor(price1, price2){
        this.#price1 = price1;
        this.#price2 = price2;
    }

    get totalCost(){
        return this.#price1 + this.#price2
    }
}

let ite1 = new MenuItem(5,10)
 console.log("the total price of the first menu is " + ite1.totalCost)

 let item2 = new MenuItem(12, 23)
 console.log("the total price of the second menu is " + item2.totalCost)

 let myArr = [1, 'cat', 3.5, true, {name: 'John', age: 23}]
//  function printArr(element, index){
//     console.log('The element', element, 'has index ', index)
 //}
myArr.forEach((element,index) => console.log('The element', element, 'has index ', index))


function isString (element){
    return typeof element === 'string'
}
let filterArr = myArr.filter(isString)
console.log(" Array after sorting ", filterArr)

let myCat = {
    name: 'Tom',
    age: 3,
    color: 'black',
    sound: function(){
        console.log('Meow')
    }
}

let someArr = [1, 2, 3, 4]
let modifiedArr = someArr.map(x => x + 2)
console.log(modifiedArr)

function addToArr(input, arr){
    arr.push(input)
    console.log(arr)
}

addToArr(101, someArr)
console.log(someArr)