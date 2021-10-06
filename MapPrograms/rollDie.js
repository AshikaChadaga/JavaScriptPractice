let count = 1;
let maximumCount = 1;
let minimumCount = 11;
let numberWithMaximumCount = 0;
let numberWithMinimumCount = 0;
let stopCount = 0;
let dieCountMap = new Map();

function rollDie() {
    let dieValue = Math.floor(Math.random() * 6 + 1);
    console.log("Die Result: " + dieValue);
    return dieValue;
}

while (stopCount < 10) {
    let dieValue = rollDie();
    if (dieCountMap.has(dieValue)) {
        count = dieCountMap.get(dieValue) + 1;
    }
    dieCountMap.set(dieValue, count);
    if (count > stopCount)
        stopCount = count;
}

for ([key, value] of dieCountMap.entries()) {
    if (value > maximumCount) {
        maximumCount = value;
        numberWithMaximumCount = key;
    }
    if (value < minimumCount) {
        minimumCount = value;
        numberWithMinimumCount = key;
    }
}

console.log("\nDie Map : ");
console.log(dieCountMap);
console.log("\nNumber with Minimum Count : " + numberWithMinimumCount + "\nNumber with Maximum Count : " + numberWithMaximumCount);

