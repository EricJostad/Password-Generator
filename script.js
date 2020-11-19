// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordLength = document.getElementById().value; 
  //possible password combination values
  var uppCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var num = ["1","2","3","4","5","6","7","8","9","0"];
  var specChar = ["!","@","#","$","%","^","&","*","(",")","_","+","?"];  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  for(var i = 0; i <= passwordLength; i++){
      password = password + uppCase.charAt(Math.floor(Math.random() * Math.floor(uppCase.length - 1)))
      + lowCase.charAtcharAt(Math.floor(Math.random() * Math.floor(lowCase.length - 1))) + 
      num.charAtcharAt(Math.floor(Math.random() * Math.floor(num.length - 1))) + 
      specChar.charAtcharAt(Math.floor(Math.random() * Math.floor(specChar.length - 1)));
  }

  //passwordText.value = password;
  document.getElementById("display").value = password;

  document.getElementById("lastNums").innerHTML += password + "</br>";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);