
// loop through the numbers 1 to 10 and log them to the console
var arrNumbers = [];
for(let i =10; i < 100; i=i+10){
    arrNumbers.push(i);
}

for(let number of arrNumbers){
    console.log(number);
}

for(let num in arrNumbers){
    console.log(num);
}

// create three objects with the following properties: name, age, and city
let friendsArray = [];
let person1 = {
    name: "John",
    age: 25,
    city: "New York"
};  

let person2 = {
    name: "Maria",
    age: 30,
    city: "Los Angeles"
};

let person3 = {
    name: "David",
    age: 35,
    city: "Chicago"
};

friendsArray.push(person1, person2, person3);
console.log(friendsArray);

for(let friend of friendsArray){
    console.log(friend);
}

for(let friend in friendsArray){
    console.log(friendsArray[friend]);
}

for(let prop in person1){
    console.log(person1[prop]);
}

for(let prop in person1){
    console.log(prop);
}

