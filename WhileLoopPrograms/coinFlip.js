let headCount = 0;
let tailCount = 0;

while (headCount != 11 && tailCount != 11) {
    let coin = Math.floor(Math.random() * 2);
    if (coin == 0) {
        headCount++;
    }
    else {
        tailCount++;
    }
}
if (headCount > tailCount) {
    console.log("Head Wins!\nHead Count : " + headCount + "\nTails Count : "+ tailCount);
}
else {
    console.log("Tail Wins!\nHead Count : " + headCount + "\nTails Count : "+ tailCount);
}