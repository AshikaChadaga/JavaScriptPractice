const prompt = require("prompt-sync")();
console.log("1:Feet-Inch\n2:Feet-meter\n3:Inch-feet\n4:Meter-Feet\n")

let choice = parseInt(prompt("Enter Your choice : "));
let userValue = parseInt(prompt("Enter the Value: "));

switch (choice) {
    case 1:
        console.log("Feet To Inch \n Feet = " + userValue + " To Inch = " + userValue * 12);
        break;
    case 2:
        console.log("Feet To Meter \n Feet = " + userValue + " To Meter = " + userValue * 0.3048);
        break;
    case 3:
        console.log("Inch To Feet \n Inch = " + userValue + " To Feet = " + userValue * 0.0833333);
        break;
    case 4:
        console.log("Meter To Feet \n Meter = " + userValue + " To Feet = " + userValue * 3.28084);
        break;
    default:
        console.log("Enter valid Numbers");
        break;
}