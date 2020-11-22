// Assignment Code
var uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var num = "1234567890";
var specChar = "!@#$%^&*()+_?";  
var password = generatePassword();

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = parseInt(prompt("Please specify password length between 8 and 128 characters."));
    if( passwordLength === ""){
      alert("Length must be specified.");
      return ("Please try again.");
    }   else{
    if(passwordLength < 8){
      alert("Password must be greater than 8 characters.");
      return ("Please try again.");
    }
    if(passwordLength > 128){
      alert("Password must be less than 128 characters.");
      return ("Please try again.");
    }
  }

  var password = "";
  var possibleChar = "";

  var includeuppCase = confirm("Should uppercase letters be included?");
    if(includeuppCase){ 
      possibleChar = possibleChar + uppCase;
    }

  var includelowCase = confirm("Should lowercase letters be included?");
    if(includelowCase){ 
    possibleChar = possibleChar + lowCase;
    }
  var includenum = confirm("Should numbers be included?");
  if(includenum){ 
    possibleChar = possibleChar + num;
    }
  var includespecChar = confirm("Should special characters be included?");
  if(includespecChar){ 
    possibleChar = possibleChar + specChar;
    }

  for (var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * possibleChar.length);
    password = password + possibleChar[random];
  } 
    
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);