let numberArray = new Array();
let largestNumber = 100;
let secondLargestNumber = 100;
let smallestNumber = 999;
let secondSmallestNumber = 999;

function generateRandomNumber(){
    return Math.round(Math.random() * 899 + 100);
}

console.log("The Generated Array is:")
for (let index = 0 ; index < 3 ; index++){
    numberArray.push(generateRandomNumber());
    console.log(numberArray[index] + " ");
}

for(index = 0 ; index < numberArray.length ; index ++){
    let currentElement = numberArray[index];
    if(currentElement > largestNumber)
        largestNumber = currentElement;

    if(currentElement < smallestNumber)
        smallestNumber = currentElement;
}

console.log("Largest Element : " + largestNumber);
console.log("Smallest Element : " + smallestNumber);

for(index = 0 ; index < numberArray.length ; index ++){
    let currentElement = numberArray[index];
    if(currentElement > secondLargestNumber && currentElement < largestNumber)
        secondLargestNumber = currentElement; 

    if(currentElement < secondSmallestNumber && currentElement > smallestNumber)
        secondSmallestNumber = currentElement;
}

console.log("Second Largest Element : " + secondLargestNumber);
console.log("Second Smallest Element : " + secondSmallestNumber);