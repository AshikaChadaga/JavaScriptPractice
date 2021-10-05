const prompt = require('prompt-sync')();
let number = prompt('Enter Single Digit Number To Find Number Name: ');
number = parseInt(number);
console.log("Number = " + number);

if(number == 1){
    console.log("Number Name = ONE");
}
else if(number == 2){
    console.log("Number Name = TWO");
}
else if(number == 3){
    console.log("Number Name = THREE");
}
else if(number == 4){
    console.log("Number Name = FOUR");
}
else if(number == 5){
    console.log("Number Name = FIVE");
}
else if(number == 6){
    console.log("Number Name = SIX");
}
else if(number == 7){
    console.log("Number Name = SEVEN");
}
else if(number == 8){
    console.log("Number Name = EIGHT");
}
else{
    console.log("Number Name = NINE");
}
