const prompt = require("prompt-sync")();
let number = prompt("Enter the number : ");
console.log("The Prime Factors for " + number + " is : ");

while (number % 2 == 0) {
    console.log(2 + " ");
    number /= 2;
}

for (let index = 3; index <= Math.sqrt(number); index += 2)
{
    while (number % index == 0) {
        console.log(index + " ");
        number /= index;
    }
}
if (number > 2)
    console.log(number);