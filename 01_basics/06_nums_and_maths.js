const score=400


const balance = new  Number(100)

// console.log(balance)
 
// console.log(balance.toString())

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))//how much decimal value 

const otherNumber1=23.8966
const otherNumber2=123.8966
const otherNumber3=1123.8966//here exp me convert krdega

//this returns a string-toPrecision
// console.log(otherNumber1.toPrecision(3))
// console.log(otherNumber2.toPrecision(3))
// console.log(otherNumber3.toPrecision(3))

//here priority is given to number before decimal if the count of precision is less


const hundreds=1000000

// //this is on the basis of the U.S standards
// console.log(hundreds.toLocaleString())

// for output in indian standards
// console.log(hundreds.toLocaleString('en-IN'))

console.log(Math)
// this math has many functions and its an object


// console.log(Math.abs(-2))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))//thoda sa jada hote hi bigger value dega
// console.log(Math.floor(4.6))//choti value lega
// console.log(Math.min(4,2,1,5))//array ka min dega
// console.log(Math.max(4,5,6,7))//array ka max dega


// console.log(Math.random())//0 to 1
// console.log((Math.random()*10)+1)
// console.log(Math.floor(Math.random()*10)+1)


const min=10
const max=20

 console.log(Math.floor(Math.random()*(max-min+1))+min)