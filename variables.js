// //VERY EASY
// var y = 5; 
// var x = 10; 

// console.log(`The difference between ${x} and ${y} is ${x-y}`); 

// //EASY
// var nameOne = "Grecia"; 
// var nameTwo = "Ardiles"; 

// console.log(`The name ${nameTwo} is longer than ${nameOne} by ${(nameTwo.length - nameOne.length) + 1} characters`);

// //MEDIUM

// let person = prompt("Hello! Please type a word"); 

// if(person == person.toUpperCase()){
//     console.log("The user is shouting"); 
// }else if(person == person.toLowerCase()){
//     console.log("The user is whispering"); 
// } else{
//     console.log("The user is speaking normally"); 
// }

// //HARD
// function add(num1, num2){
//     return num1 + num2;  
// }
// function subtract(num1, num2){
//     return num1 - num2;  
// }
// function multiply(num1, num2){
//     return num1 * num2; 
// }
// function divide(num1, num2){
//     return num1 / num2; 
// }

// //VERY HARD

// let user = prompt("Choose a math function: + , - , * , / "); 
// let num1 = prompt("Choose your first number:"); 
// let num2 = prompt("Choose your second number:"); 

// if (user == "+"){
//     console.log(`${num1} + ${num2} = ${add(Number(num1), Number(num2))}`); 
// }else if(user == "-"){
//     console.log(`${num1} - ${num2} = ${subtract(Number(num1), Number(num2))}`);
// }else if(user == "*"){
//     console.log(`${num1} * ${num2} = ${multiply(Number(num1), Number(num2))}`);
// }else if(user == "/"){
//     console.log(`${num1} / ${num2} = ${divide(Number(num1), Number(num2))}`);
// }else{
//     console.log("You have inputted an incorrect value"); 
// }




var myPod = []; 
myPod[0] = "Grecia"; 
myPod[1] = "Megan"; 
myPod[2] = "Nathaly"; 
myPod[3] = "Maggie"; 
// myPod[4] = "Lucy";

if(myPod.indexOf("Lucy") >= 0){
    console.log(`Lucy is my Pod leader`)
}else{
   console.log(`Lucy is NOT my Pod leader`) 
}
// console.log(`My pod has ${myPod.length}`)




// var input = 5; 
// if(input === 1){
//     console.log("January"); 
// }else if(input === 2){
//     console.log("Feburary"); 
// }else if(input === 3){
//     console.log("March"); 
// }else if(input === 4){
//     console.log("April"); 
// }else if(input === 5){
//     console.log("May"); 
// }else if(input === 6){
//     console.log("June"); 
// }else if(input === 7){
//     console.log("July"); 
// }else if(input === 8){
//     console.log("August"); 
// }else if(input === 9){
//     console.log("September"); 
// }else if(input === 10){
//     console.log("October"); 
// }else if(input === 11){
//     console.log("November"); 
// }else if(input === 12){
//     console.log("December"); 
// }