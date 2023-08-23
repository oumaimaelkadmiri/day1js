var age = 27; 
var isStudent = false; 
var favoriteColors = ['blue', 'green', 'purple'];
//

//
var myString = 'This is a string with both single and double quotes: "Hello" and \'World\'';
console.log(myString);

//
var  age = 27; 
var isStudent = false; 

var name = "medfk"; 
var studentStatus = isStudent ? "I am a student." : "I am not a student.";
var sentence = "My name is " + medfk + ", I am " + 27 + " years old, and " + studentStatus;

console.log(sentence);
//
var myFavoriteAnimal = "cat";
var myFavoriteColor = "blue";


var userFavoriteAnimal = prompt("What's your favorite animal?");
var userFavoriteColor = prompt("What's your favorite color?");


if (userFavoriteAnimal.toLowerCase() === myFavoriteAnimal && userFavoriteColor.toLowerCase() === myFavoriteColor) {
    console.log("Wow, we have the same favorite animal and color!");
} else {
    console.log("It looks like our favorite animal and/or color is different.");
}
//

var userInput = parseFloat(prompt("Enter a number:"));


if (userInput > 0) {
    console.log("The number is positive.");
} else if (userInput < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//

var userInput = prompt("Enter a value:");


if (userInput) {
    console.log("The value is truthy.");
} else {
    console.log("The value is falsy.");
}
