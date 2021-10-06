const prompt = require("prompt-sync")();
let number = prompt("Enter the number : ");
let primeFactorsArray = new Array();

console.log("The Prime Factors for " + number + " is : ");

while (number % 2 == 0) {
    primeFactorsArray.push(2);
    number /= 2;
}

for (let index = 3; index <= Math.sqrt(number); index += 2) {
    while (number % index == 0) {
        primeFactorsArray.push(index);
        number /= index;
    }
}
if (number > 2)
    primeFactorsArray.push(number);

let uniquePrimeFactorsArray = [];
primeFactorsArray.forEach((eachPrimeFactor) => {
    if (!uniquePrimeFactorsArray.includes(eachPrimeFactor)) {
        uniquePrimeFactorsArray.push(eachPrimeFactor);
    }
});

console.log(uniquePrimeFactorsArray);