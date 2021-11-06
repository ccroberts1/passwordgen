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

//3rd confirm: "Click OK to include lowercase characters" Use Array, then add to password string. 

//4th confirm: "Click OK to include uppercase characters" Use Array, then add to password string.

//If the user selects "no" for all confirms, should display an alert "Must select at least one character type"

//After final confirm, generate password based on the criteria provided. Needs to return as a string.

for (let i=0; i < charRule; i++) {
var randomChar = potentialCharPool[Math.floor(Math.random()*potentialCharPool.length)];
newPassword+= randomChar;
}

// }

