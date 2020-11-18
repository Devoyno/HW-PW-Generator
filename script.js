// Assignment Code
var generateBtn = document.querySelector("#generate");
//create arrays for each type of character (global)
var lowerString = "abcdefghijklmnopqrstuvwxyz"
var lowerArray = lowerString.split("");
var upperArray = lowerString.toUpperCase().split("");
var numString = '0123456789'
var numArray = numString.split("");


//create a function to ask which characters and how long
function askForOptions() {
    var passLength = parseInt(prompt("how long"));
  if(passLength < 8 || passLength > 128 || isNaN(passLength) === true) {
    alert("please choose a valid number");
    return;
  }

    var isLower = confirm("lowercase?");
    var isUpper = confirm("uppercase?");
    var isNumber = confirm("use numbers?");
    var isSpecial = confirm("use special characters?");

    var options = {
      passLength,
      isLower,
      isUpper,
      isNumber,
      isSpecial
    }
    
    console.log(options)
    return options
}

function generatePassword() {
 var passOptions = askForOptions();
 var superArray = [];
 var results = [];

 if(passOptions.isLower === true) {
  superArray = superArray.concat(lowerArray)
  console.log(superArray)
 }
 if(passOptions.isUpper === true) {
  superArray = superArray.concat(upperArray)
  console.log(superArray)
 }
 if(passOptions.isNumber === true) {
  superArray = superArray.concat(numArray)
  console.log(superArray)
 }

 for(var i = 0; i < passOptions.passLength; i++) {
   var index = Math.floor(Math.random() * superArray.length);
   console.log(index)
   var digit = superArray[index];
   console.log(digit)
   results.push(digit)

 }
 console.log(results)
 return results.join("")

 

  //accept those options and then build a single array for accepted types

  //Math.floor(Math.Random())
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
