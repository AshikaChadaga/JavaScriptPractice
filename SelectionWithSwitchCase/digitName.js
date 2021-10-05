const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter the units digits [1,10,100,1000....]:  "));

switch (number) {
    case 1:
        console.log("The digit is : UNIT");
        break;

    case 10:
        console.log("The digit is : TEN");
        break;

    case 100:
        console.log("The digit is : HUNDRED");
        break;

    case 1000:
        console.log("The digit is : THOUSAND");
        break;

    case 10000:
        console.log("The digit is : TEN THOUSAND");
        break;

    case 100000:
        console.log("The digit is : ONE LAKH");
        break;

    case 1000000:
        console.log("The digit is : TEN LAKHS");
        break;

    case 10000000:
        console.log("The digit is : ONE CRORE");
        break;

    default:
        console.log("Invalid Digit");
        break;
}