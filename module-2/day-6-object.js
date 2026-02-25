const post = {
    id: 1,
    title : 'Post One',
    body: ' This is the body',
}

//Convert to JSON to string
const str = JSON.stringify(post);

// Convert JSON to object Json parse

const obj = JSON.parse(str);

console.log(obj);


//Assignment
// Assignment 1 — User Profile Storage Simulation (Very Realistic)

// Task

// Create a function that:
// 	1.	Accepts a user object
// 	2.	Converts it to JSON
// 	3.	Pretends to “store” it (just keep it in a variable)
// 	4.	Retrieves it and converts it back to an object

// Starter Data

const user = {
    id:1,
    name: 'Sylvester Nnachi',
    skills: ['UX','HTML', 'CSS', 'Javascript'],
    isMarried: true
}

//Convert to JSON String

const jString  = JSON.stringify(user);

console.log(jString);

// Convert JSON to Object

const backObject = JSON.parse(jString);
console.log(backObject);


// Assignment 2 — Transaction History (Fintech-style)

// Task

// You have an array of transactions.
// 	1.	Convert it to JSON (simulate sending to server)
// 	2.	Convert it back (simulate receiving from server)
// 	3.	Calculate total income and total expenses


const transactions = [
    {type: "income", amount: 250000},
    {type: "expense", amount: 50000},
    {type: "expense", amount: 30000},
    {type: "income", amount: 120000}

];

//Convert JSON.stringigy
const jTransc = JSON.stringify(transactions);

console.log(jTransc);

//Convert back to Objectt

const objTransc = JSON.parse(jTransc);

console.log(objTransc);
let totalIncome = 0;
let totalExpense = 0;



for (let i = 0; i < objTransc.length; i++) {


    if((objTransc[i]).type === 'income'){
        totalIncome += objTransc[i].amount;
    } 
      if((objTransc[i]).type  === 'expense'){
        totalExpense += objTransc[i].amount;
    }

    // totalIncome += objTransc[i].amount;
    
}

console.log(`Total Income : ${totalIncome} -  Total Expense: ${totalExpense}`);


const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Stave Jobs',
        author: 'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'MockingJay',
        author: 'Suzanne Collins',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
  
]

//Set all read value to true;

let readChange;
let changeTitle;

for (let i = 0; i < library.length; i++) {
    readChange = library[i].status.read = true;
}

for (let key in library) {
    if(key === '0'){
        changeTitle = library[key].title = 'First Book';
    }
}


// library[0].title = 'First Book';




console.log(library);
console.log(changeTitle);


