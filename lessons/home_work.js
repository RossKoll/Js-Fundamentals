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