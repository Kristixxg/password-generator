// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    if (password === undefined) {
      return;
    }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChar = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", "+", "-", ".", "/", ":", ";", "<", ">", "?", "[", "]", "_", "{", "}", "~"];

  var passwordLength;

  do {
    passwordLength = prompt("Please enter password length of at least 8 characters and no more than 128 characters");
    if (passwordLength === null) {
      break;
    }  
  } while (passwordLength < 8 || passwordLength > 128);

    
  //console.log(typeof passwordLength);
  // || (typeof parseInt(passwordLength) !== "number")
 
  if(passwordLength === null) {
    return;
  };


  var hasLowerCase;
  var hasUpperCase;
  var hasNumber;
  var hasSpecialChar;
  var poolOfChar = [];
 
  //if input is not number?
  //
  function hasCharType() {
    hasLowerCase = confirm("Do you want to include lowercase letters?");
    if (hasLowerCase === true) {
      poolOfChar = poolOfChar.concat(lettersLower);
    }

    hasUpperCase = confirm("Do you want to include uppercase letters?");
    if (hasUpperCase === true) {
      poolOfChar = poolOfChar.concat(lettersUpper);
    }

    hasNumber = confirm("Do you want to include numbers?");
    if (hasNumber === true) {
      poolOfChar = poolOfChar.concat(numbers);
    }

    hasSpecialChar = confirm("Do you want to include special characters?");
    if (hasSpecialChar === true) {
      poolOfChar = poolOfChar.concat(specialChar);
    }
  }
   
  do {
    hasCharType();
  } while (!hasLowerCase && !hasUpperCase && !hasNumber && !hasSpecialChar)


  var passwordLine = "";

  
  for (let i = 0; i < passwordLength; i++) {
    passwordLine += poolOfChar[Math.floor(Math.random() * poolOfChar.length)];
  }

  return passwordLine;

}