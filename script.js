function generatePassword() {
  var passwordgen = "";

  // When User clicks the Generate Password button, they receive a prompt to confirm how long their password should be, as long as the length is between 8-128 characters
  var confirmLength = parseInt(prompt("Select desired password length. (Must be between 8-128 characters)"));

  // If the User inputs anything other than a number, they will receive an error alert
  if (isNaN(confirmLength)) {
    return alert("Please input a number between 8 and 128.");
  }

  // If the User puts in a number, but it is not a number > 8, they will receive an error alert
  if (confirmLength < 8) {
    return alert("Invalid response. Must be between 8 and 128 characters.")
  }

  // If the User puts in a number, but it is not a number < 128, they will receive an error alert
  if (confirmLength > 128) {
    return alert("Invalid response. Must be between 8 and 128 characters.")
  }



  // User is given option to include lowercase letters in password
  var confirmLowercase = confirm("Do you want lowercase letters in your password?");
  
  // User is given option to include uppercase letters in password
  var confirmUppercase = confirm("Do you want uppercase letters in your password?");
  
  // User is given option to include numbers in password
  var confirmNumbers = confirm("Do you want numbers in your password?");
  
  // User is given option to include special characters in password
  var confirmSpecial = confirm("Do you want special characters in your password?");
  
  
  // If any of the above Confirms are true, they will be pushed into the array of characterAr
  var characterAr = "";
  if (confirmLowercase) {
    characterAr = characterAr + getLower();
  }

  if (confirmUppercase) {
    characterAr = characterAr + getUpper();
  }
  
  if (confirmNumbers) {
    characterAr = characterAr + getNumber();
  }
  
  if (confirmSpecial) {
    characterAr = characterAr + getSpecial();
  }

  // If all Confirms return false, User receives error alert message that at least one must be true to receive random password
  if (characterAr.length === 0) {
    return alert("Must confirm at least one character type.")
  }

  // If User confirms they want lowercase, a random lowercase letter is chosen
  function getLower() {
      return "abcdefghijklmnopqrstuvwxyz"
  }
  
  // If user confirms they want uppercase, a random uppercase letter is chosen
  function getUpper() {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  
  // If User confirms they want numbers, a random number is chosen
  function getNumber() {
      return "1234567890"
  }
  
  // If User confirms they want special characters, a random special character is chosen
  function getSpecial() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
      return symbols
  }

  // For Loop created to choose a random character (based on the User's preferences) for each character in the specified password length
  for (var i = 0; i < confirmLength; i++) {
      var randomCharacter = [Math.floor(Math.random() * characterAr.length)];
      passwordgen = passwordgen + characterAr[randomCharacter];
  }
  // Returns the random password on the User's screen
  return passwordgen;
}

///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
