//  Question 1
const bot = "meme";
const sentence = "How can I assist you today.";

//console.log(`Hello am  bot ${bot} ${sentence} `)

//  Question    2   
const age = 15;
const studentName = "Faith"
//  if( age >=18 && studentName === 'faith'){
//     console.log('Can enroll as a student')
//  }
//  else{
//     console.log('Underage')
//  }

 //const result =  age >= 18 ?   console.log('Can enroll as a student') :   console.log('Underage');

//  Question 3

let num1 = 5;
let num2 = 10;
//console.log(num1 +num2)
(num1,num2)=>{}

// steps
// declare a function isOdd or even
// parameter which is a num
// modulus operator

// function isOddOrIsEven(number){
//     if(number % 2 === 0){
//         return 'The number is even'
//     }
//     else{
//         return "The number is odd"
//     }
// }

// console.log(isOddOrIsEven(10000))

// const greetUser = (username)=>{
//     console.log("Hello " + username)
// }
// let user = "Faith"
// let secondUser = "Peter"


// greetUser(user)
// greetUser(secondUser)
// greetUser("Winnie")

//arrow function

// const isOddOrIsEven = (number) =>{
//     if(number % 2 === 0){
//         return 'The number is even'            
//     }
//     else{
//         return "The number is odd"

      
//    }

// }
// console.log(isOddOrIsEven(5))

// const area = (num1,num2) => { // function expression
//     return num1 * num2;
// }
// // variables to store arguments when calling afunction should be diffrent with parameters used when declaring a function

// let width = 5;
// let length = 7;

// // calling / invoking/ executing function with the arguments
// console.log("your area is", area(width,length))

// const perimeter = function (length,width) { //function expression
//     return 2 * (length + width)

// }
// let length1= 5;
// let width1= 10;
// console.log("your perimeter is", perimeter(length1,width1))



// calculating area of a square
//parameter length which is a number

//declaring AN ARROW FUNCTION
 const areaOfASquare = (num) =>{
    return num * num
 }
 let num = 16;
 console.log('your area is ', areaOfASquare(num))
 console.log(areaOfASquare(9))
 console.log(areaOfASquare(5))
 console.log(areaOfASquare(90))


