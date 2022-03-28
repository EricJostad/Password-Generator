// Assignment Code
let uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowCase = "abcdefghijklmnopqrstuvwxyz";
let num = "1234567890";
let specChar = "!@#$%^&*()+_?";
let password = generatePassword();

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let passwordLength = parseInt(prompt("Please specify password length between 8 and 128 characters."));
  if (passwordLength == "") {
    alert("Length must be specified.");
    return "Please try again.";
  }
  if (passwordLength < 8) {
    alert("Password must be greater than 8 characters.");
    return "Please try again.";
  }
  if (passwordLength > 128) {
    alert("Password must be less than 128 characters.");
    return "Please try again.";
  }

  let password = "";
  let possibleChar = "";

  let includeuppCase = confirm("Should uppercase letters be included?");
  if (includeuppCase) {
    possibleChar = possibleChar + uppCase;
  }

  let includelowCase = confirm("Should lowercase letters be included?");
  if (includelowCase) {
    possibleChar = possibleChar + lowCase;
  }

  let includeNum = confirm("Should numbers be included?");
  if (includeNum) {
    possibleChar = possibleChar + num;
  }

  let includespecChar = confirm("Should special characters be included?");
  if (includespecChar) {
    possibleChar = possibleChar + specChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    let random = Math.floor(Math.random() * possibleChar.length);
    password = password + possibleChar[random];
  }

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);