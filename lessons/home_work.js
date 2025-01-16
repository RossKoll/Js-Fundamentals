// first task
var people = {
    friend : []
}

var john = { 
    name: "John",
    age: 30,
    ID : 123}

var mariam = {
    name: "Mariam",
    age: 25,
    ID : 124
}

var peter = {
    name: "Peter",
    age: 35,
    ID : 125
}

people.friend.push(john, mariam, peter);
console.log(people.friend)

// second task
const theList = [
    "Laurence",
    'Svekis',
    true,
    35,
    null,
    undefined,
    {test: 'one',
        score : 55
    },
    ['one', 'two']
]

theList.shift();
theList.splice( 1, 6, "MIDDLE");
theList.unshift("FIRST");
theList.push("hello world");
theList.push("LAST");
console.log(theList)

// home work = second task

let storeItem = []
let item1 = {
    name: "item1",
    model: "model1",
    cost: 100,
    quantity: 5
}

let item2 = {
    name: "item2",
    model : "model2",
    cost: 200,
    quantity: 10
}

let item3 = {
    name: "item3",
    model: "model3",
    cost: 300,
    quantity: 15
}   

storeItem.push(item1, item2, item3);
console.log(storeItem);

console.log("The quantity of the third item is : " + storeItem[2].quantity);

let myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));

const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);

const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
//myArr3.length = 0; // this will clear the array : get or set the length of the array
console.log(myArr3[0]);