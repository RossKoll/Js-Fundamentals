
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