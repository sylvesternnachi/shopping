//Arrow functions

// function add(a,b){
//     return a + b;
// }


//Arrow function syntax 

const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => a - b;

console.log(add(10,5))
console.log(subtract(10,5))

//Returning an object

const creatObj = () => ({
    name: 'brand'
})

console.log(creatObj().name)

const numbers = [1,2,3,4,5,6];

numbers.forEach((num)=> {
    console.log(num)
});

//Immediate Invoked Function Expressions IIFE

(function (){
    const user = 'John';
    console.log(user);

    //Another function inside a function
    const hello = () => { console.log('Hello from the IIFE')}
    hello()

})();

(function (name){
    console.log('Hello, ' + name)
})('Amara');


//Assignment
const minMax = (num) => {
    return {
        min: Math.min(...num),
        max: Math.max(...num),
    }
}

console.log(minMax([1,2,3,5,6,7,8]));

//Assigment 2

// Create an IIFFE that takes a lengt and width of a rectangle outputs it to the console in a message as soon as the page loads

(function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    console.log(`Browser width is ${width}px while height is ${height}px`)

})();

// Write a function roundScore(score) that:
// 	•	Accepts a decimal number
// 	•	Returns:
// 	•	Math.round(score)
// 	•	Math.floor(score)
// 	•	Math.ceil(score)

const roundScore = (num) => {
    return{
        round: Math.round(num),
        floor: Math.floor(num),
        ceil: Math.ceil(num)
    }
}

console.log(roundScore(78.6));



const formatResult = (score) => {
    const result = Math.round(score)
    if(result >= 50){
        return `${result} Pass`
    }else{
        return `${result} Fail`
    }
}

console.log(formatResult(49.9))

//Assignment 

const calculateTotal = (price, addVat) => {
    // const addVat = 7.5;

    const result = price + (price * (addVat / 100));

    return Math.ceil(result);
}

console.log(calculateTotal(1999.99,7.5));

//Assignment

const withdrawAmount = (amount) => {
    const wAmount = Math.trunc(amount);
    return wAmount;
}

console.log(withdrawAmount(10500.99));
console.log(withdrawAmount(10500.01));

//Assignment

const processPayment = (amount,percentage) => {
    const calPecentage = amount * (percentage / 100);
    const total = amount + calPecentage;

    return {
        originalAmount : amount,
        calPecentage : calPecentage,
        Total: Math.ceil(total)
    }

}

console.log(processPayment(4500.75,1.25));


// MiniProject
// Create a wallet system that:
// 	•	Manages balance
// 	•	Processes deposits & withdrawals
// 	•	Applies fees
// 	•	Handles rounding correctly
// 	•	Stores transaction history

// You’ll use:
// 	•	Functions
// 	•	Objects
// 	•	Arrays
// 	•	Math.round / floor / ceil / trunc

const wallet = {
    walletID: 'AC001',
    owner : 'Sylvester',
    balance: 0,
    transactions: [],
    totalDeposit:0,
    totalWithdrawals:0,

    deposit(amount){

        if( amount > 0 ) {
              this.balance += amount;
        let trancDate = new Date(Date.now());

         storeTransaction = {
            type: 'deposit',
            tDate: trancDate.toLocaleString(),
            amount: amount 
        },
         this.transactions.push(storeTransaction);

            //Counting total Deposit Made
            this.totalDeposit ++; 

         return `=N=${amount} deposited successfully, new account balance is =N=${this.balance} `;
        

        } else{
            return 'Amount must be greater than 0';
        }
      },

    withdrawAmount(amount){
        const widthdrawAmount = Math.trunc(amount);
        const bankFee = 50;
        const totalWithAmount = widthdrawAmount + bankFee;

         if(totalWithAmount > this.balance ){
            return `Insufficient funds - your current balance is =N=${this.balance}`;
        }

         this.balance -= totalWithAmount;

        let trancDate = new Date(Date.now());

         storeTransaction = {
            type: 'widthdraw',
            tDate: trancDate.toLocaleString(),
            amount: amount 
        },
         this.transactions.push(storeTransaction);

         //Counting total Widthdrwer Made
            this.totalWithdrawals ++; 

        return storeTransaction;
       
    },

    currentBalance(){
        return `Your current balance is =N=${this.balance}`;
    }
    


};




const transfer = (receiverWallet, amount) => {
        if( receiverWallet == wallet.walletID && amount > 0){

            wallet.balance += amount;
            let trancDate = new Date(Date.now());

         storeTransaction = {
            type: 'transfer',
            tDate: trancDate.toLocaleString(),
            amount: amount 
        },

         wallet.transactions.push(storeTransaction);

         return `Transfer successful of ${amount} to ${receiverWallet}`

        }

        else{
            return 'Invalid Input, make sure the wallet ID is valid and you are transfering more than 0 naira';
        }
};

// Monthly Maintaince
const applyMonthlyFee = (walletID) => {
   if(walletID == wallet.walletID && wallet.balance > 0){
        let monthlyFee = 0.5;

       let monthlyFeeResult = wallet.balance * (monthlyFee / 100);
       let finalAmount = Math.round(wallet.balance - monthlyFeeResult);

        let trancDate = new Date(Date.now());
         storeTransaction = {
            type: 'widthdraw',
            tDate: trancDate.toLocaleString(),
            amount: monthlyFeeResult 
        },
         wallet.transactions.push(storeTransaction);

       return `=N=${monthlyFeeResult} has been withdraw from your balance for monthly maintaince fee leaving it at N${finalAmount}`;

   }else{
        return `Invalid wallet ID or wallet balance is less than the monthly fee`;
   }
}


console.log(wallet.deposit(1000));
console.log(wallet.deposit(250));
console.log(wallet.deposit(7516));
console.log(wallet.deposit(107516));
console.log(wallet.withdrawAmount(930));
console.log(wallet.currentBalance())
console.log(wallet.transactions)
console.log(wallet)

// console.log(applyMonthlyFee('AC001'));

console.log(transfer('AC001', 1200));
console.log(transfer('AC001', 500000));
console.log(applyMonthlyFee('AC001')); 