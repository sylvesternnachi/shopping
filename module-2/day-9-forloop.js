//New Forloop method

const items = ['book','table','chair','kite'];
const users = [
    {name: 'Brad'},
    {name: 'Kate'},
    {name: 'Steve'},
];

for (const item of items){
    console.log(item);
}

for(const user of users){
    console.log(user.name);
}

const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
    color5: 'pink ',
}

for(const key in colorObj){
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green','blue','yellow'];

for (const key in colorArr){
    console.log(colorArr[key]);
}

//ForEach

const social = ['Twitter','Linkedin','Facebook','Instagram'];
const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'Linkedin', url: 'https://linkedin.com'},
    {name: 'Instagram', url: 'https://instagram.com'},
    {name: 'Tiktok', url: 'https://tiktok.com'},

];

// console.log(social.__proto__)
social.forEach( (item, index, arr ) => {
    console.log(index, item, arr)
});

socialObjs.forEach((item) => (console.log(item.url)));



// Array. Filter

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumber = numbers.filter((num) => {
//     return num  % 2 === 0;
// });


//Same with ForEach
// const evenNum = []
// numbers.forEach((num) => {
//     if(num % 2 === 0){
//         evenNum.push(num)
//     }
// })

// console.log(evenNumber)
// console.log(evenNum);

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2009},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 1981, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1981, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1981, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 1981, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
]

// const retailCoy = companies.filter((retalfilter) => {
//         if(retalfilter.category == 'Retail'){
//             return retalfilter;
//         }
// });

const retailCoy = companies.filter((company) => company.category === 'Retail');


console.log(retailCoy);

// Get company that started in or after 1980 and ended before 2025

// const earlyCompany = companies.filter((company) => {
//     if(company.start >= 1980 && company.end <= 2005){
//         return company;
//     }
// });

const earlyCompany = companies.filter((company) => company.start >= 1980 && company.end <= 2005 );

console.log(earlyCompany);

//Get company that last 10 years or more 
const lastedCompany = companies.filter((company) => company.end - company.start >= 10);
console.log(lastedCompany);




// MAP. ARRAY.MAP

const numbs = [1,2,3,4,5];
const doubledNumbs = numbs.map((num) => num * 2);

console.log(doubledNumbs);



//Create an array of company names

const coyName = companies.map((company) => company.name );

console.log(coyName);

// Create an array company and  categry

const coyNameCategory = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
})

console.log(coyNameCategory);


//Create an raay wirh the company name and years of existens

const companyYear = companies.map((company) => {
    return `Name: ${company.name}  - Years: ${company.end - company.start}`
});

console.log(companyYear);

//Assignment
// Task:
// 	•	Get only active staff
// 	•	Get only designers
// 	•	Get active designers

const staff = [
  { name: 'Lekan', role: 'designer', active: true },
  { name: 'Ruth', role: 'developer', active: false },
  { name: 'Chika', role: 'designer', active: true },
   { name: 'Sylester', role: 'designer', active: false },
  { name: 'Samad', role: 'marketer', active: false }
];

const activeStaff = staff.filter((sa) => sa.active === true);

const onlyDesigner = staff.filter((od) => od.role === 'designer');

const activeDesigner = staff.filter((aD) => aD.role === 'designer' && aD.active === true);



console.log(activeStaff);
console.log(onlyDesigner);
console.log(activeDesigner);


//Assignment
// Task:
// 	•	Increase everyone’s salary by 10%
// 	•	Return a new array
// 	•	Do not modify the original array

const salaries = [80000, 120000, 50000, 200000];

const increaseSalaries = salaries.map((salary) => {
        return salary + (salary * 0.10 );
})

console.log(increaseSalaries);


//Reduce

const cart = [
    {id: 1, name: 'Product 1', price:130 },
    {id: 2, name: 'Product 2', price:150 },
    {id: 3, name: 'Product 3', price:172 },
    {id: 4, name: 'Product 4', price:200 },
]

const total = cart.reduce((acc, product) => {
    return acc + product.price;
},0)

console.log(total)


//Using Reduce
	// •	Calculate total monthly salary
	// •	Then calculate total yearly salary

    const staffSalaries = [80000, 120000, 50000, 200000];

    const monthlySalary = staffSalaries.reduce((acc,num) => {
           return acc + num;
    })

    const yearlySalary = staffSalaries.reduce((acc,num) => {
        return acc + num;
    })

    console.log(monthlySalary);

    console.log(yearlySalary * 12);

    //Assignment

    	// Filter students who passed (score ≥ 50)

        const students = [
  { name: 'Ayo', score: 85 },
  { name: 'Bola', score: 42 },
  { name: 'Tunde', score: 73 },
  { name: 'Zainab', score: 30 }
];

const studentPass = students.filter((student) => student.score >= 80 )
                            .map((student) => {
                                    return ` ${student.name} passed with ${student.score}`;
                                })

console.log(studentPass);


//Assignment
// Tasks:
// 	•	Calculate total cart value
// 	•	Apply 10% discount if total > 500,000
// 	•	Return final amount

const shoppingCart = [
  { name: 'Laptop', price: 500000, qty: 1 },
  { name: 'Mouse', price: 15000, qty: 2 },
  { name: 'Keyboard', price: 30000, qty: 1 }
];

const totalCart = shoppingCart.map((product) => product.price)
                            .reduce((acc,price) => {
                                return acc + price;
                            });

// 	•	Apply 10% discount if total > 500,000
const priceDiscount = () => {
    if(totalCart > 500000){
    let discountPrice = totalCart - (totalCart * 0.10);
    return discountPrice;
}
}


console.log(totalCart);
console.log(priceDiscount());


//Assignment
//Take the people array and create an array called youngPeople that stores objects 
// with ONLY name and email properties of all people that are 25 and under.
//The name property should have their first and last name.

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'FOe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
]

const youngPeople = people.filter((yPeople) => yPeople.age <= 25 ).map((youngP) => {
                            let result = {
                                name: youngP.firstName + ' ' + youngP.lastName,
                                email: youngP.email
                            }
                            return result;
                          });
                          

console.log(youngPeople);

//Challenge 2
//Add all of the positive number in the array.

const nums = [2,-30,50,20,-12,-9,7]

const addPostive = nums.filter((number) => number >= 1 )
                        .reduce((acc,number) => {
                            return acc + number;
                        });

console.log(addPostive);

// Challenge 3
// Create a new array called capitalizedWords with the words from the words array with
//  the first letter of each word capitalized.
// Expected

const words = ['coder','programmer','developer'];

const capitalizedWords = () => {
    
   return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

}

console.log(capitalizedWords());


// 

// REAL-WORLD PROJECT (No DOM, but REAL)

// 🔥 Project: Simple Wallet System

// This is real backend logic, not toy stuff.

// Features
// 	•	Wallet balance
// 	•	Deposit money
// 	•	Withdraw money
// 	•	Transaction history
// 	•	Total spent
// 	•	Total deposited


const wallet = {
    balance: 0,
    transactions: [],
    dailyLimit: 20000,

    deposit(amount){

        if(typeof amount !== 'number' || isNaN(amount || amount <= 0)){
            return "Amount must be a valid number greater than 0 ";
        }
        this.balance += amount;

        this.transactions.push({ 
            type : 'deposit', 
            amount : amount 
        });

        return `Deposited N${amount}`;
        
    },
    withdraw(amount){
       
       if(typeof amount !== 'number' || isNaN(amount || amount <= 0)){
            return "Amount must be a valid number greater than 0 ";
        }
        
        if(amount > this.balance){
            return `Insufficient funds. Current balance: ₦${this.balance}`;
        }

        //check if daily limit has been reach
        let checkLimitAmount = this.getTotalWithdrawals() + amount;
       if (checkLimitAmount > this.dailyLimit) {
              return `Daily withdrawal limit of ₦${this.dailyLimit} exceeded`;
        }


        
        this.balance -= amount;

        // //Add a transfer fee of 50 naira on every withdrawal.
            this.transferfee(50);
        ///

        this.transactions.push({ 
            type: 'widthdraw', 
            amount: amount,
        });

        return `Withdraw N${amount}`;
   

    },

     //NewFeatures
        //Add a transfer fee of 50 naira on every withdrawal.

        transferfee(amount){
            if(typeof amount!== 'number' || isNaN(amount || amount <= 0)){
                return "Amount must be valid number greater than zero"
            }
            if(amount > this.balance){
                return `Insufficient funds. Current balance: ₦${this.balance}`;
            }

            this.balance -= amount;

             this.transactions.push({ 
            type: 'Transaction fee', 
            amount: amount,
             });

             return `Transaction Fee Charges for for widthdrawer N ${amount}`;
        },

    getTotalDeposits(){
        // use filter + reduce
        const totalDeposit = this.transactions.filter(trans => trans.type === 'deposit')
                                                .reduce((acc,trans) => {  
                                                    return acc + trans.amount;
                                                },0);
                          return `Total Deposit =N= ${totalDeposit}`;            
            
    },
    getTotalWithdrawals() {
    // use filter + reduce
    const totalWithdrawals = this.transactions.filter(trans => trans.type === 'widthdraw' )
                                                .reduce((acc,trans) => {
                                                    return acc + trans.amount;
                                                }, 0);

                                return `Total Spent =N= ${totalWithdrawals}`;  
  },






}

console.log(wallet.deposit(1000));
console.log(wallet.deposit(1000));
console.log(wallet.deposit(15000));
console.log(wallet.withdraw(6200));
console.log(wallet.deposit(18600));
console.log(wallet.deposit(12060));
console.log(wallet.withdraw(500));
console.log(wallet.withdraw(7500));
console.log(wallet.withdraw(20500));
console.log(wallet.withdraw(7500));
console.log(wallet.getTotalDeposits());
console.log(wallet.getTotalWithdrawals());
console.log(wallet.withdraw(100));
console.log(`Current Wallet Balance is =N=${wallet.balance}`)
console.log(wallet.transactions);
