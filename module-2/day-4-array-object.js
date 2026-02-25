let x;
const fruits = ['apple','perl','orange'];
const berries = ['strawberry','blueberry', 'strawberry'];

// x = fruits.concat(berries);

x = [...fruits,...berries];
// fruits.push(...berries);

// Flatten Arrays

const arr = [1,2,[3,4,5],6,7,[8,'James',9,10]];

x = arr.flat()

console.log(x)

let y;

const newArr = [1,2,3,4,5]

newArr.push(6);

y = newArr.reverse()

console.log(newArr);

let a;
let resultA;

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
a = [...arr1,...arr2];
resultA = a.splice(5,1);

 console.log(a);


//  🟢 Assignment 1 — Basic Array Control

// Write a function processScores(scores) that:
// 	•	Accepts an array of numbers
// 	•	If the array is empty → return "No scores available"
// 	•	Returns an object containing:
// 	•	total → sum of all numbers
// 	•	average → average score (rounded to 2 decimals)
// 	•	highest → highest score
// 	•	lowest → lowest score

function processScores(scores){
    if(scores.length === 0 ){
        return 'No scores available';
    } 

    if(!Array.isArray(scores)){
         return 'Accepts an array of numbers';
    }

  let total = 0;
  let avgScore;
  let highScore;
  let lowScore

  for (let i = 0; i < scores.length; i++) {
     total += scores[i];
  }

  avgScore = total / scores.length.toFixed(2);
  highScore = Math.max(...scores)
  lowScore = Math.min(...scores)
  
  return {
    total : total,
    avgScore : avgScore,
    highScore : highScore,
    lowScore : lowScore
  };
    

}

console.log(processScores([10,20,30,40,50]))


// Assignment 2 — Remove Duplicates

// Write a function removeDuplicates(items) that:
// 	•	Accepts an array
// 	•	Returns a new array with duplicates removed
// 	•	Order must remain the same

// Example

function removeDuplicates(items){

    let itemCheck = []

    for (let i = 0; i < items.length; i++) {
        
         if( !itemCheck. includes(items[i]) ){
            itemCheck.push(items[i]) ;
         }
    }

    return itemCheck;

}

console.log(removeDuplicates(['John','Smith','Matthew','Smith']));


// 🟢 Assignment 4 — Activity Formatter (Array + String Combo)

// Write a function formatActivities(activities):

// Rules:
// 	•	Accepts an array of strings
// 	•	Remove "Sleep" if it exists
// 	•	Convert all items to uppercase
// 	•	Join them with " → "


function formatActivities(activities){
    if(!Array.isArray(activities)){
        return `Enter a valid array string`
    }

    function toSentenceCase(text){
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    

    let totalActivities = [];

    for (let i = 0; i < activities.length; i++) {
        
               // skip "sleep" regardless of how user types it

        if(activities[i].toLowerCase() !== 'sleep' ){
            totalActivities.push( toSentenceCase(activities[i]));
        }


    }
        if(totalActivities.length === 0){
            return 'No activities to show';
        }

    return totalActivities.join(" -> ");

}

console.log(formatActivities(['sleep']))