const age = parseInt(prompt("how old are you?"));

console.log(age);

if (isNaN(age) || age < 0) {
    console.log("Please write a real number");
}
else if (age >= 20 && age <= 50) {
    console.log("You can drink!");
}
else if(age > 50 && age <= 80){
    console.log("You shuld exercise");
}
else if(age > 80){
    console.log("You can do whatever you want!");
}
