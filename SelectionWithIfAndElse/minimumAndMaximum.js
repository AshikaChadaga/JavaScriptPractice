function generateRandomNumber(){
    return Math.round(Math.random() * 899 + 100);
}

let maxNumber = 100;
let minNumber = 999;
for(index = 1; index <= 5; index++){
    let number = generateRandomNumber();
    console.log("Number" + index + " : " + number);
    if(number < minNumber)
        minNumber = number;
    if(number > maxNumber)
        maxNumber = number;
}

console.log("Maximum Number = " + maxNumber);
console.log("Minimum Number = " + minNumber);