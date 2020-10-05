// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChars = ['!', '@', '#', '$', '%', '^', '(', ')', '-', '_', '+', '{', '}', '[', ']', '~', '.', ',', ':', '=', '&', '*'];


// Write password to the #password input
function writePassword() {
  var allChars = [];
  var myPassword = [];
  var choseChar = false;
  //putting allChars and myPassword within the writePassword function so that they are reset if they want to retry generating their password.

  var passwordText = document.querySelector("#password");

  var length = prompt("How long do you want your password? Please input a number between 8 and 128.");
  var isNum = Number.isInteger(parseInt(length));
  if(length < 8 || length>128)
  {
    isNum = false;
  }

  while (isNum === false) {

    alert("Your input was not a number from 8 to 128, please retry using a number from 8 to 128.");
    var length = prompt("How long do you want your password?");
    isNum = Number.isInteger(parseInt(length));
  }
  while (choseChar === false) 
  {
    var upperLets = confirm("Do you want upper case letters?");
    var lowerLets = confirm("Do you want lower case letters?");
    var nums = confirm("Do you want numbers?");
    var specs = confirm("Do you want special characters?");

    if (upperLets) {
      for (x = 0; x < letters.length; x++) {
        allChars.push(letters[x].toUpperCase());
      }
      choseChar = true;
    }
    if (lowerLets) {
      for (x = 0; x < letters.length; x++) {
        allChars.push(letters[x]);
      }
      choseChar = true;
    }
    if (nums) {
      for (x = 0; x < numbers.length; x++) {
        allChars.push(numbers[x]);
      }
      choseChar = true;
    }
    if (specs) {
      for (x = 0; x < specialChars.length; x++) {
        allChars.push(specialChars[x]);
      }
      choseChar = true;
    }
    if(choseChar === false)
    {
      alert("please choose at least one character type.")
    }
  }
  for (y = 0; y < length; y++) {
    myPassword.push(allChars[getRandomInt(0, allChars.length)]);
  }

  password = myPassword.join("");

  passwordText.value = password;

  passwordText.textContent = password;
  console.log(password)

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}