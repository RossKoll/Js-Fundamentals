//
 export function printGreating(name){
    console.log(`Hello ${name} from function imported from another folder`);
}

export function printTwoDigitsSum(num1, num2){
    console.log(`Sum of two numbers: ${num1 + num2}`);
}

export class CastomerDetails{

    /**
     * 
     * @param {firstName} name 
     */
    printFirstName(name){
        console.log("First Name: " + name);
    }

    /** 
    * @param {string} lastName
    */
    printLastName(name){
        console.log("Last Name: " + name);
    }
}

export const customerDetails = new CastomerDetails();