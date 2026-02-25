//Assignment 1 
// 	•	Accepts one argument
	// •	If the value is not a number, return "Invalid input"
	// •	If the number is even, return "Even"
	// •	If the number is odd, return "Odd"

    function checkNumber(num) {

     if(typeof(num) != 'number'){
            return 'Invalid Input';
        }else{
            
            if(num % 2 === 0){
            return `${num} is an even number`;
        }else{
            return `${num} is an odd number`;
        }

        }  
       
    }

    console.log(checkNumber('40'));



//     Assignment 2
//     Write a function called canAccessDashboard that accepts:
// 	•	isLoggedIn (boolean)
// 	•	isAdmin (boolean)

// Rules:
// 	•	If the user is not logged in, return "Access denied"
// 	•	If logged in but not admin, return "Limited access"
// 	•	If logged in and admin, return "Full access"


function canAccessDashboard(loginStatus,userStatus){
    
    if(loginStatus == 0){
        return 'Access Denied';
    }

    if(loginStatus == 1 && userStatus === 'user'){
        return 'Limited access';
    }

      if(loginStatus == 1 && userStatus === 'admin'){
        return 'Full access';
    }

}

console.log(canAccessDashboard(1,'admin'));

//Assignment 3
// Write a function called calculateFinalPrice that:
// 	•	Accepts price (number)
// 	•	If price is not a number or ≤ 0, return "Invalid price"
// 	•	If price is ≥ 10000, apply 20% discount
// 	•	If price is ≥ 5000, apply 10% discount
// 	•	Otherwise, no discount

// Return the final price rounded to the nearest integer.

function calculateFinalPrice(num){
    if(typeof num !== 'number' || num <= 0){
        return 'Invalid price';
    } else if (num >= 10000){
        let percentage = 0.20 // 20%
        let result =  Math.round(num * percentage);
        let discount = num - result; 
        return `Discount of ${result} has been giving to you the innitial price ${num} you are to pay ${discount}`; 
    } else if(num >= 5000){
        let percentage = 0.10 // 10%
        let result = Math.round(num * percentage);
        return `Discount of ${result} has been giving to you the innitial price ${num} you are to pay ${discount}`;
    } else{
        return num + ' No discount'; 
    }
}


console.log(calculateFinalPrice(15000))