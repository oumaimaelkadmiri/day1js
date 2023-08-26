var age = 25; 
var isStudent = true; 
var favoriteColors = ['red', 'green', 'blue'];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var x="this is my name :" ;
var y=' Oumaima Elkadmiri';
console.log(x); 
console.log(y);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var  age = 25; 
var isStudent = true; 
var name = " Elkadmiri oumaima"; 
var studentStatus = isStudent ? "I am a student." : "I am not a student.";
var message = "My name is : " + name + ", I am " + age + " years old.  " + studentStatus;
console.log(message);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// users
var userFavoriteAnimal = prompt("Quel est votre animal préféré ?");
var userFavoriteColor = prompt("Quelle est votre couleur préférée ?");
//Me
var yourFavoriteAnimal = "chien";
var yourFavoriteColor = "bleu";
// verification
if (userFavoriteAnimal.toLowerCase() === yourFavoriteAnimal && userFavoriteColor.toLowerCase() === yourFavoriteColor) {
    console.log("Nous avons les mêmes préférences !");
} else {
    console.log("Nos préférences sont différentes.");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Prompt the user for a number
var Number=parseFloat(prompt("Enter a Number") ;

// Check if the number is positive, negative, or zero
if (Number > 0){
console.log("Number is positive");
}
 else if (Number < 0){
    console.log("Number is negative");
    }
else{
    console.log("Number is zero");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Prompt the user for a value
var userValue = prompt("Enter a value:");
//me for value
var meValue = 1000;
// Check if the value is truthy or falsy
if (userValue.toLowerCase() == meValue) {
    console.log("The entered value is truthy.");
} else {
    console.log("The entered value is falsy.");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


