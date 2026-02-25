//Ternary Operator

const age = 19;

//Using an if statement
if(age >= 18){
    console.log('You can vote!');
}else{
    console.log('You can not vote');
}


// Using a ternary operator

age >= 18 ? console.log('You can vote!') : console.log ('You cannot vote');

//Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote, surely' : 'Sorry, You cant vote';


console.log(canVote);
console.log(canVote2);

//Multiple Statement

const auth = true;
// let redirect;

// if(auth){
//     alert ('Welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     alert('Access Denied');
//     redirect = '/';
// }

const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access Denied'), 'Login');


console.log(redirect);