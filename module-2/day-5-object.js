let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address : {
       street : '38 Opere Street',
       city: 'Coker',
       state: 'Lagos'
    },

    hobbies : ['Music','Football'],

    // greet(name){
    //     return 'Good afternoon ' + name
    // },
};

x = person.name;
x = person.address.street;
x = person.hobbies[1];

person.name = 'Sylvester Nnachi';

delete person.address;

person.hasChildren = true;

person.greet = function (){
    console.log(`Hello, my name is ${this.name}`)
}

person.greet();

x = person;

console.log(x);

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

const obj3 = {...obj1, ...obj2};

console.log(obj3);

const firstName = 'Samuel';
const lastName = 'Ogbonna';
const age = 30;

const persons = {
    firstName,
    lastName,
    age,

};

console.log(persons);


//Destructuring


const todo = {
    id: 1,
    title : 'Take out trash',
    user : { name: 'John' }
};

const { id, title, user } = todo;

console.log(id, title, user.name);

//Destructure Array

const numbers = [ 23, 67, 33, 49, 52 ];

const [first, second, ...rest] = numbers;

console.log(first, second, rest)



// Assigment 1
let printUser;

const users = {
    userName : 'John Martins',
    userAge : 38,
    userEmail : 'john.martins@gmail.com',
    isVerified : false
}

const {userName, userEmail} = users

users.isVerified  = false;

users.lastLogin = '2 hours ago';

console.log(userName,userEmail);
console.log(users);


// Assigment 2

// Create an object bankAccount with:
// 	•	accountName
// 	•	balance

// Add methods:
// 	•	deposit(amount)
// 	•	withdraw(amount)
// 	•	checkBalance()

// Rules:
// 	•	Deposit adds to balance
// 	•	Withdraw subtracts only if balance is enough
// 	•	Return useful messages

// 💡 This mirrors fintech logic (SimpleFinance vibes 😉)

const bankAccount = {
    accountName : 'Sylvester Nnachi',
    balance : 0,

    deposit(amount){
        this.balance += amount;
        return `Deposit NGN ${amount}. New Balance is ${this.balance}`;
    },

    withdraw(amount){

        if(amount > this.balance){
            return `Insufficient balance`;
        }
       this.balance -= amount;
        return ` Withdrew NGN ${amount} .  New Balance is ${this.balance}`;
    },

    checkBalance(){
        return `Your current balance is NGN ${this.balance}`;
    }

}

console.log(bankAccount.deposit(50400))
console.log(bankAccount.deposit(500))
console.log(bankAccount.withdraw(1500))
console.log(bankAccount.checkBalance());


// Assignment

const scores = {
    math: 80,
    english: 65,
    science: 90,
    art:70
}

// Calculate total score

let getObjectValueArr = Object.values(scores)

let sum = 0;


for (let i = 0; i < getObjectValueArr.length; i++) {
   sum += getObjectValueArr[i];
}

//average

const avg = sum / getObjectValueArr.length

const scoreResult = {
   sum,avg
}

console.log(scoreResult);


//Assignment

const order = {
  orderId: "ORD001",
  customer: {
    name: "Sylvester",
    phone: "080..."
  },
  items: [
    { name: "Laptop", price: 450000, qty: 1 },
    { name: "Mouse", price: 15000, qty: 2 }
  ],

  
}

let ArrItems = order.items;
 let priceSum = 0;


 for (let i = 0; i < ArrItems.length; i++) {
     priceSum += ArrItems[i].price * ArrItems[i].qty;
    
 }

function cNameTotal(){
    return `Customer Name: ${order.customer.name} : Total Price  ${priceSum}`;
}

function printReceipt(){

    let itemList = '';

    for (let i = 0; i < ArrItems.length; i++) {
        itemList += `${ ArrItems[i].name} x ${ ArrItems[i].qty} - N${ ArrItems[i].price} * ${ ArrItems[i].qty}`;
        
    }
    
     return `
     Order id: ${order.orderId} 
     Customer Name: ${order.customer.name} 
      Telephone No: ${order.customer.phone} 
    Itemlist: ${ itemList}

      Total Price : ${priceSum}`;
}


console.log(cNameTotal());
console.log(printReceipt());


//Assignment 3

const originalUser = {
  name: "Alex",
  skills: ["HTML", "CSS"]
};



let copyUser;
let ModifyUser;

copyUser = {
    name: originalUser.name,
    skills : [...originalUser.skills]
}

ModifyUser = originalUser.name = 'John';

console.log(ModifyUser)
console.log(copyUser)
console.log(originalUser);


// Mini Project — User Management System 

// Build functions for:
// 	•	createUser(name, email)
// 	•	updateUser(user, newData)
// 	•	deleteUser(user)
// 	•	listUserDetails(user)

// Rules:
// 	•	Use objects properly
// 	•	No global variables
// 	•	Clean returns (no console chaos)
const userManagement = {
    users: [],

    createUser(name,email){
        const user = {
            id: Date.now(),
            name,
            email
        };
        this.users.push(user)
        return user;
    },

    updateUser(user, newData){
        return {...user, ...newData}
    }
 
}


console.log(userManagement.createUser('sylvelity009','sylvelity009@gmail.com'))
console.log(userManagement.updateUser('sylvelity009','johnson'))
