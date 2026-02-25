// Assignment 1 — Username Formatter

// Write a function formatUsername(name) that:
// 	•	Accepts a string
// 	•	Removes extra spaces at the beginning and end
// 	•	Converts the name to lowercase
// 	•	Replaces all spaces with _
// 	•	If the name is empty after trimming, return "Invalid username"


function formatUsername(userName){ 
    if(typeof userName != 'string' || userName.trim().length === 0 ){
        return `Invalid Input`;
    }else{
        return userName.trim().toLowerCase().replaceAll(' ','_');
    }
}

console.log(formatUsername('    Sylvester Nnachi Ukpai        '));

// Assignment 2 — Word Counter

// Write a function countWords(sentence) that:
// 	•	Accepts a string
// 	•	Returns the number of words
// 	•	Ignores extra spaces


function countWords(words){
    if(typeof words != 'string' || words.trim().length === 0){
        return `Invalid Input`;
    } else{
        return words.split(' ').length;
    }
}

console.log(countWords('John John John John a x'))

// Assignment 3 — Email Masking

// Write a function maskEmail(email) that:
// 	•	Shows only the first 2 characters of the email name
// 	•	Masks the rest with *
// 	•	Keeps the domain intact

function maskEmail(email){
    if(typeof email != 'string' || email.trim().length === 0 || !email.includes('@') ){
        return `Invalid Input`;
    }
    let [username,domain] = email.split('@');
    
    if(username.length < 2){
        return `Invalid Input`;
    }
    let masked = username.slice(0,2) + '*'.repeat(username.length);

    return masked + '@' + domain;
}

console.log(maskEmail('jamesman@gmail.com'))


// Assignment 4 — Capitalize Sentence

// Write a function capitalizeSentence(text) that:
// 	•	Capitalizes the first letter of each word
// 	•	Handles multiple spaces correctly

function capitalizeSentence(text){
    if(typeof text != 'string' || text.trim().length === 0){
        return `Invalid Input`;
    }
    else{
        return text.split(' ').filter(word => word !== '').map(word => word[0].toUpperCase() + word.slice(1)).join (' ');
    }

}

 console.log(capitalizeSentence('mighty voices choir'));

//  Assignment 5 — String Analyzer

// Write a function analyzeString(text) that returns an object:

function analyzeString(text){
    if(text.trim().length === 0){
        return `Invalid input`;
    }

    let length = text.length;
    let word = text.split(' ').length;
    let hasNumber = /\d/.test(text);

    let hasUppercase = /[A-Z]/.test(text);

    return `
    Length :  ${length} 
    Word :  ${word}
    hasNumber : ${hasNumber}
    hasUpperCase : ${hasUppercase}
    `;
}

console.log(analyzeString('House of David'));


// Assgnment
// Password Strength Checker
// checkPasswordStrength("Pass123!")
// // "Strong"
// Rules:
// 	•	At least 8 characters
// 	•	Contains uppercase
// 	•	Contains lowercase
// 	•	Contains number
// 	•	Contains special character


function checkPasswordStrength(password){

    if(typeof password !== 'string'){
        return `Enter a valid password`;
    } 

      password = password.trim();

       if(password.length === 0){
        return `Enter a valid password`;
    } 

    if (password.length < 8){
     return `Password must be more than 8 character`;   
    }
    
  

    let passStrength;

      let checkForUpperCase = /[A-Z]/.test(password);
      let checkForLowerCase = /[a-z]/.test(password);
      let checkForNumbers = /\d/.test(password);
      let checkForSpecialChar = /[^\w\s]/.test(password);


    if(!checkForUpperCase){
    passStrength = 'Weak';
     return `Password Strength: ${passStrength} - Password must at least one upper case`;   
    }

     if(!checkForLowerCase){
        passStrength = 'Weak';
     return `Password Strength: ${passStrength} - Password must have lowecase character too`;   
    }

    if(!checkForNumbers){
        passStrength = 'Medium';
     return ` Password Strength: ${passStrength} - Password must have numbers inclusive`;   
    }

      if(!checkForSpecialChar){
         passStrength = 'Medium';
     return ` Password Strength: ${passStrength} -  Password must have special character`;   
    }

        passStrength = 'Strong';
        return `Password Strength: ${passStrength} -  Great, you are good to go: `
 

}

console.log(checkPasswordStrength('abnanaaa.'));



//Make the first letter of the string uppercase
const myString = 'business';

const firstLetter = myString.charAt(0).toUpperCase();
const restOfTheWords = myString.slice(1);

const result = firstLetter + restOfTheWords;

console.log(result);



//Make the first letter of each world uppercase
const multipleWords = 'business management team';
let words = multipleWords.split(' ');

// set result as array
let mResult = [];

for (let index = 0; index < words.length; index++) {
    let word = words[index]; // get one word
    let firstLetter = word.charAt(0).toUpperCase();
    let restOfTheWords = word.slice(1);

    mResult.push(firstLetter + restOfTheWords);
}


  console.log(mResult);

  // Assigment

//   Write a function generateRandomNumber(min, max) that:
// 	•	Accepts two numbers (min and max)
// 	•	Returns a random whole number between them (inclusive)



function generateRandomNumber(min,max){
    
    let randomNumber = Math.floor(Math.random() * max + min);

    return randomNumber;
}

console.log(generateRandomNumber(1,10));

//Write a function roundNumber(num) that returns:

function roundNumber(num){
    let result = {
        floor: Math.floor(num),
        ceil: Math.ceil(num),
        round: Math.round(num),
    }

    return result;

}

console.log(roundNumber(4.6));

// Assignment 3 — Absolute Difference

// Write a function absoluteDifference(a, b) that:
// Returns the positive difference between two numbers

function absoluteDifference(a,b){
    let result = { 
        firstDifferrence :  Math.abs(a - b),
         secondDifferrence : Math.abs(a - b),
    }
    return result;
}

console.log(absoluteDifference(10,4))

// Assignment 4 — Highest & Lowest Score

// Write a function findMinMax(numbers) that:
// 	•	Accepts an array of numbers
// 	•	Returns an object with the smallest and largest number

function findMinMax(num){
    let result = {
        min : `min: ${Math.min(...num)}`,
        max : `max: ${Math.max(...num)}`
    }

    return result;
}

console.log(findMinMax ([5, 12, 3, 9, 100]))

// Write a function rollDice() that:
// 	•	Returns a random number between 1 and 6
// 	•	Uses Math.random()

function rollDice(){
    let result = Math.floor(Math.random() * 6 + 1);

    return result;
}

console.log(rollDice());



// Assignment 6 — Simple Guess Game (Mini Project)

// Create a function guessNumber(userGuess) that:
// 	•	Generates a random number between 1 and 5
// 	•	Compares it with userGuess
// 	•	Returns:
// 	•	"You win!" if correct
// 	•	"Try again. The number was X" if wrong

function guessNumber(userGuess){
    let result = Math.floor(Math.random() * 5 + 1);
    if(typeof userGuess !== 'number'){
        return 'Invalid Input';
    }
    if(result === userGuess){
        return `You win`
    }else{
        return 'Try again. The number was ' + result;
    }
}

console.log(guessNumber(3));