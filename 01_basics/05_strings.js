const name="dhruv"
const repoCount=50

// console.log(name+repoCount+ " value");//outdated

// ``we use these backticks- bcz yha pr aata h string interpolation and make placeholders and fill them
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


// another way to declare a string

const gameName=new String('dhruvdr')
// console.log(gameName);

// console.log(gameName[0]);

// this is how we can access the prototype to hame empty object milega {}
// 
// console.log(gameName.__proto__);
// console.log(gameName[0]);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());//but this doesnot chng the original value - pass by value hai

// console.log(gameName.charAt('2'));//0 based indexing
// console.log(gameName.indexOf('r'));

// most imp pt that -> here outer bound is not included
const newString = gameName.substring(0,2)
console.log(newString);


const anotherString=gameName.slice(0,4)
console.log(anotherString);