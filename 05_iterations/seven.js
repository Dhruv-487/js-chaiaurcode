const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers.map((num) => {return num+10})
//or
// const newNums=myNumbers.map((num) =>  num+10)
// console.log(newNums)

//chaining-using 2 or 3 methods at a time
// pehle map me 10 multiply hogya sb me and dusre map me updated arr use hoga  
const newNums=myNumbers
        .map((num)=>num*10)
        .map((num)=>num+1)
        .filter((num)=>num>=40)
console.log(newNums)