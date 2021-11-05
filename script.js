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

//1st prompt: "How many characters would you like your password to contain?"  
//Should check that user must select between 8-128 characters. Needs to have alerts: 1 warns user if they provide less than 8 characters and 1 warns user if they provide greater than 128 
var charRule = prompt("How many characters would you like your password to contain?");

if (charRule < 8) {
  alert("Your password must contain at least 8 characters")
} else if (charRule > 128) {
  alert("Your password must contain less than 129 characters")
} else {

}

//1st confirm: "Click OK to include special characters" Use Array, then add to password string


//2nd confirm: "Click OK to include numeric characters" Use Array with math.random and math.floor. Add to password string.

//3rd confirm: "Click OK to include lowercase characters" Use Array, then add to password string. 

//4th confirm: "Click OK to include uppercase characters" Use Array, then add to password string.

//If the user selects "no" for all confirms, should display an alert "Must select at least one character type"

//After final confirm, generate password based on the criteria provided. Needs to return as a string.

//Then return that result to an alert/page

// }

