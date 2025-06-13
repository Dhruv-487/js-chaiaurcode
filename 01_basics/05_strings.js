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
// if we give neg value then vo usko obey ni krta hence usko ignore krdega and 0 se start krdega
const newString = gameName.substring(0,2)
// console.log(newString);


// we can also give negative values in it

const anotherString=gameName.slice(-6,4)//from index 1 to 3
// bcz here length is 7 and -6 means count from end so 7-6=1 so start index is 1
// hence o/p is "hru"


/*
when index is greater than abs(length) then it will start from the starting index
*/
// const anotherString=gameName.slice(-9,4)//dhru
// const anotherString=gameName.slice(0,4)//dhru
// console.log(anotherString);



/* ex-when len=-8
 st. index=7-8=-1
 but js never sliccces from the neg index less than -string.length
 ->If start index < -length, it becomes 0 internally.

So -8 becomes 0
*/

const newStringOne="   hitesh   "
// console.log(newStringOne)//this print spaces
// console.log(newStringOne.trim());//this does not print spaces


const url="https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20','-'))

// console.log(url.includes('hitesh'))


const gaming =new String('dhruv-dr-com')
// console.log(gaming.split('-'))

const sg="ha"
// console.log(sg.repeat(3))

console.log(sg.concat(" huuuu"))