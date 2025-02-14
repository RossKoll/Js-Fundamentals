/**
 * @param {string[]} array
 */

let someString = "Hello my dEar friends on this roOm";
let arrString = someString.split(" ");
console.log(arrString);
let newArr = [];
let finalString;

function makeUpperCaseFirstCharacter(array) {
  array.forEach(element => {
    let firstChar = element.slice(0, 1).toUpperCase();
    console.log("first character in the word :", firstChar);
  

    let resrOfWord = element.toLowerCase().slice(1);
    console.log("rest of the word : ", resrOfWord);

    let newWord = firstChar.concat(resrOfWord);
    console.log("new word : ", newWord);

    newArr.push(newWord);
  }
);
  let finalString = newArr.join(" ");
  console.log(finalString);
}

makeUpperCaseFirstCharacter(arrString);
//console.log(newArr)
