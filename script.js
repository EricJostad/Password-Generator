// Assignment Code
var uppCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var num = ["1","2","3","4","5","6","7","8","9","0"];
var specChar = ["!","@","#","$","%","^","&","*","(",")","_","+","?"];  
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
    if( passwordLength == ""){
      alert("Length must be specified.");
      return false;
    }   else{
    if(passwordLength < 8){
      alert("Password must be greater than 8 characters.");
      return false;
    }
    if(passwordLength > 128){
      alert("Password must be less than 128 characters.");
      return false;
    }
}

  var password = "";
  var possibleChar = uppCase;

  var includeuppCase = confirm("Should uppercase letters be included?");
    if(includeuppCase){ 
      possibleChar = possibleChar.concat(uppCase);
    }

  var includelowCase = confirm("Should lowercase letters be included?");
    if(includelowCase){ 
    possibleChar = possibleChar.concat(lowCase);
    }
  var includenum = confirm("Should numbers be included?");
  if(includenum){ 
    possibleChar = possibleChar.concat(num);
    }
  var includespecChar = confirm("Should special characters be included?");
  if(includespecChar){ 
    possibleChar = possibleChar.concat(specChar);
    }

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);