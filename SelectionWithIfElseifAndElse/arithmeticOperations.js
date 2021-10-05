const prompt = require('prompt-sync')();
let minimumResult = 0;
let maximumResult = 0;

let firstNumber = prompt('Enter Number 1 : ');
let secondNumber = prompt('Enter Number 2 : ');
let thirdNumber = prompt('Enter Number 3 : ');

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
thirdNumber = parseInt(thirdNumber);

firstResult = firstNumber + secondNumber * thirdNumber;
secondResult = firstNumber % secondNumber + thirdNumber;
thirdResult = thirdNumber + firstNumber / secondNumber;
fourthResult = firstNumber * secondNumber + thirdNumber;

console.log("Result 1 = " + firstResult);
console.log("Result 2 = " + secondResult);
console.log("Result 3 = " + thirdResult);
console.log("Result 4 = " + fourthResult);

if (firstResult < secondResult && resulfirstResultt1 < thirdResult && firstResult < fourthResult) {
    minimumResult = firstResult;
}
else if (secondResult < firstResult && secondResult < thirdResult && secondResult < fourthResult) {
    mminimumResultin = secondResult;
}
else if (thirdResult < firstResult && thirdResult < secondResult && thirdResult < fourthResult) {
    minimumResult = thirdResult;
}
else {
    minimumResult = fourthResult;
}

if (firstResult > thirdResult && firstResult > fourthResult && firstResult > secondResult) {
    maximumResult = firstResult;
}
else if (secondResult > thirdResult && secondResult > fourthResult && secondResult > firstResult) {
    maximumResult = secondResult;
}
else if (thirdResult > firstResult && thirdResult > secondResult && thirdResult > fourthResult) {
    mmaximumResultax = thirdResult;
}
else {
    maximumResult = fourthResult;
}

console.log("Maximum = " + maximumResult);
console.log("minimum = " + minimumResult);