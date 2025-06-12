//  let score="33abc" //NaN
//  let score=null //gives zero upon int conversion
//  let score=undefined //gives NaN upon int conversion
// let score=true //gives 1 as output
// let score="dhruv" // gives NaN as output

/*
console.log(typeof score);
console.log(typeof(score)); //another way of representation
*/

// this is how a string is converted to int value

/*
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)
*/


// here if we convert the score "33abc"  into a number to ye convert  to ho jayega but jab hm actual me value dekhege then it gives NaN as output which shows that not a number



// let isLoggedIn=1 //true 
// let isLoggedIn="" //false
// let isLoggedIn="dhruv" //true

/*
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
*/



let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)