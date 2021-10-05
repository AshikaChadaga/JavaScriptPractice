const prompt = require('prompt-sync')();
let day = prompt('Enter Single Digit Number To Find Number Name: ');
day = parseInt(day);
console.log("Date = " + day);

if(day == 0){
    console.log("Day Of The Week : SUNDAY");
}
if(day == 1){
    console.log("Day Of The Week : MONDAY");
}
else if(day == 2){
    console.log("Day Of The Week : TUESDAY");
}
else if(day == 3){
    console.log("Day Of The Week : WEDNESDAY");
}
else if(day == 4){
    console.log("Day Of The Week : THURSDAY");
}
else if(day == 5){
    console.log("Day Of The Week : FRIDAY");
}
else if(day == 6){
    console.log("Day Of The Week : SATURDAY");
}
else{
    console.log("Invalid Day");
}