//array-storing a collection of multiple items under a single var which enables storing a collection of multiple items under a single var name and it jas member for performing common array operation 

const myArr=[0,1,2,3,4,5]

// JS arrays are resizable and the can contain a mix of different datatypes.

// console.log(myArr[0])

// JS array copy operations create shallow copies.. shallow copy of an object is a copy whose props share the same references as those of the src obj from which the copy has made
//in short by ref hai to jo chng krege  vo chng ho jyega

// Deep copy-props do not share the same ref

const myHeroes=["ironman","spiderman"]

const myArr2=new Array(1,2,3,4)


//Array methods
myArr.push(6)
// console.log(myArr)

myArr.push(7)
// console.log(myArr)

myArr.pop()
// console.log(myArr)

// myArr.unshift(90)//for pushing at start
// console.log((myArr));

//  myArr.shift()//for removing from start
// console.log(myArr);


// console.log(myArr.includes(9))//return boolean 
// console.log(myArr)
// console.log(myArr.includes(0))

// console.log(myArr.indexOf(9))//if not present then it's index is -1
// console.log(myArr.indexOf(2))



const newArr=myArr.join()//this changes the type of the array to string

// console.log(myArr)
// console.log(newArr)

// console.log(typeof newArr)//string

console.log("A ",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)

const myn2=myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)


//slice operation does not manipulate the original array
// while the splice operation changes the original array jo spilce ia vo alg and bche hue original array me aa jayege



