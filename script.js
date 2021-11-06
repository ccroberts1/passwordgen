// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//This function will generate the password
// generatePassword() {

//Prompts user for desired character length of password, contains error handling to meet length conditions
var charRule = parseInt(prompt("How many characters would you like your password to contain?"));

if (charRule < 8) {
  alert("Your password must contain at least 8 characters")
} else if (charRule > 128) {
  alert("Your password must contain less than 129 characters")
} else {
 var newPassword = "";
}

var potentialCharPool = [];

//1st confirm (special characters)
var specialCharArray = [  "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";","<", "=", ">", "?", "@", "[",];

var specialCharPrompt = confirm("Click OK to include special characters in your password");

if (specialCharPrompt) {
    potentialCharPool.push(...specialCharArray);
  };

//2nd confirm (numeric characters)
var numCharArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var numCharPrompt = confirm("Click OK to include numeric characters in your password");

if (numCharPrompt) {
    potentialCharPool.push(...numCharArray);
  };

//3rd confirm (lowercase characters)
var lowerCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lowerCharPrompt = confirm("Click OK to include lowercase characters in your password");

if (lowerCharPrompt) {
    potentialCharPool.push(...lowerCharArray);
  };

//4th confirm (uppercase characters)
var upperCharArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var upperCharPrompt = confirm("Click OK to include uppercase characters in your password");

if (upperCharPrompt) {
    potentialCharPool.push(...upperCharArray);
  };


//After 4th confirm, error handling checks that at least 1 of the character type confirms has been selected. If not, displays an alert indicating at least one must be selected.
//If at least 1 is selected, this will generate a password based on the criteria provided.
if(specialCharPrompt !== true && numCharPrompt !== true && lowerCharPrompt !== true && upperCharPrompt !== true) {
    alert("Must select at least one character type");
} else {
  for (let i=0; i < charRule; i++) {
  var randomChar = potentialCharPool[Math.floor(Math.random()*potentialCharPool.length)];
  newPassword+= randomChar;
  }
}

// }

