const prompt = require('prompt-sync')();
let number = prompt('Enter Single Digit Number To Find Number Name: ');
number = parseInt(number);
console.log("Number = " + number);

switch(number){
    case 1 :
        console.log("Number Name = ONE");
        break;
    case 2 : 
        console.log("Number Name = TWO");
        break;

    case 3 : 
        console.log("Number Name = THREE");
        break;

    case 4 : 
        console.log("Number Name = FOUR");
        break;

    case 5 : 
        console.log("Number Name = FIVE");
        break;

    case 6 :
        console.log("Number Name = SIX");
        break;

    case 7 :
        console.log("Number Name = SEVEN");
        break; 

    case 8 :
        console.log("Number Name = EIGHT");
        break; 

    case 9 : 
        console.log("Number Name = NINE");
        break;
    
    default :
    console.log("Invalid Number");

}
