//ForLoop

//Nested Loop
for (let i = 1; i <= 10; i++){
    console.log('Number ' + i);

    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }

}

//Loopp through an array
const names = ['Lekan','Samad','Ruth','Chika','Sylvester'];

// for (let n = 0; n < names.length; n++) {
//     let staffName = names[n];

//     CheckRes = staffName == 'Sylvester' || staffName == 'Chika' ? (`${staffName} is a VestarPlus Staff`) : (`${staffName} is a Pirobi Staff`);

// console.log(CheckRes);

// }
   
     
let x = 0;

// While Loop
// while(x <= 20){
//     console.log('While Number ' + x);
//     x++;
// }

//Do while Loop

do{
    console.log('Do while loop ' + x );
    x++;
}while(x <= 20);


// Assignment -  FizzBuzz Challenge Print/log

for (let index = 1; index <= 100; index++) {
    if(index % 15 === 0){
          console.log('FizzBuzz');
         continue;
    }
    else if(index % 3 === 0){
         console.log('Fizz');
         continue;
    } else if (index % 5 === 0) {
         console.log('Buzz');
         continue;
    }
    console.log(index)
    
}
