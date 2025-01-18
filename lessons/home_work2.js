const prompt = require("prompt-sync")({sigint:true});
let userage = prompt("Please enter your age: ");
if (userage <= 19){
    console.log("You are not allowed to enter the website");
}else if (userage <21){
    console.log("You can enter the website but you cannot drink alcohol");}
else{ 
    console.log("You can enter the website and drink alcohol");
}

console.log(userage);