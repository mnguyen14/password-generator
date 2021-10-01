//Global var
// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberSet = "1234567890";
var specialChar = "@%+/'!#$^?:,(){}[]~";

var passwordChars = ""

// Write password to the #password input
function writePassword() {
  
  var password = ""
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //function for password
  function generatePassword() {
    var passLength = window.prompt("How long would you like your password to be? Pick a number between 8 and 128.");
  
  //while loop to make sure a number between 8 and 128 is selected
    while(passLength < 8 || passLength > 128){
    alert("Invalid, please select a number between 8 and 128.");
    passLength = window.prompt("How long would you like your password to be? Pick a number between 8 and 128.");
  };

  //if statements add to the library of the characters that can selected for the password
  var lCase = window.confirm("Would you like lowercase letters in your password?");
    if (lCase === true) {
      passwordChars += lowerCase;
    };
  
  var uCase = window.confirm("Would you like capital letters in your password?");
    if (uCase === true) {
      passwordChars += upperCase;
    };
  
  var numSet = window.confirm("Would you like numbers in your password?");
    if (numSet === true) {
      passwordChars += numberSet;
    };
  
  var specChar = window.confirm("Would you like special characters in your password?");
    if (specChar === true) {
      passwordChars += specialChar;
    };

  //in case user hits cancel on all criteria for password
  if (lCase === false && uCase === false && numSet === false && specChar === false) {
    alert("You must select at least one criteria for your password.");
    location.reload();
  };

  for (var i = 0; i < passLength; i++) {
    password += passwordChars[Math.floor(Math.random() * passwordChars.length)]
  }
  
  return password;
  }
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

