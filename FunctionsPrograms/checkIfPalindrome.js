const prompt = require("prompt-sync")();
let firtsNumber = prompt("Enter first number: ");
let secondNumber = prompt("Enter second number: ");

function PalindromeChecker(number) {
    let reverseNumber = number.split("").reverse();
    if (number == reverseNumber.join("")) {
        return true;
    }
    else {
        return false;
    }
}

if (PalindromeChecker(firtsNumber) && PalindromeChecker(secondNumber)) {
    console.log("The Given Two Numbers are palindrome");
}
else {
    console.log("The Given Numbers are Not palindrome");
}
