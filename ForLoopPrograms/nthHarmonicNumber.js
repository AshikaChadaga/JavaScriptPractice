const prompt = require("prompt-sync")();
let number = prompt("Enter Nth Number : ");

let result = 0;
for(let index=1; index<=number; index++)
{
    result += (1 / index);
}
console.log(number + "th Harmonic Number is : " + result.toFixed(2));