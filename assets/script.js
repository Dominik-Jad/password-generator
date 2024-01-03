// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // create an object to store user input
  var passwordOptions = {
    length: 0,
    lowerCasedCharacters: false,
    upperCasedCharacters: false,
    numericCharacters: false,
    specialCharacters: false,
  };
  // Prompt user to choose a length of at least 8 characters and no more than 128 characters 
  while (
    // while passowrd length is less than 8 or greater than 128 or not a number ask the user to enter a valid length
    passwordOptions.length < 8 ||
    passwordOptions.length > 128 ||
    isNaN(passwordOptions.length)
  ){
    passwordOptions.length = parseInt(
      prompt(`How many characters would you like your password to contain? (8 - 128)`)
    );
  }
  // Prompt user to choose lowercase, uppercase, numeric, and/or special characters
  do{
    passwordOptions.lowerCasedCharacters = confirm(
      `Click OK to confirm including lowercase characters.`
    );
  
    passwordOptions.upperCasedCharacters = confirm(
      `Click OK to confirm including uppercase characters.`
    );
  
    passwordOptions.numericCharacters = confirm(
      `Click OK to confirm including numeric characters.`
    );
  
    passwordOptions.specialCharacters = confirm(
      `Click OK to confirm including special characters.`
    );
  }while(
    // while all the options are false ask the user to choose at least one option
    !passwordOptions.lowerCasedCharacters &&
    !passwordOptions.upperCasedCharacters &&
    !passwordOptions.numericCharacters &&
    !passwordOptions.specialCharacters
  )
  return passwordOptions;
}
// Function for getting a random element from an array
function getRandom(arr) {
  // generate a random index from 0 to the length of the array
  var randIndex = Math.floor(Math.random() * arr.length);
  // get the element at the random index
  var randElement = arr[randIndex];
  // return the element
  return randElement;
}

