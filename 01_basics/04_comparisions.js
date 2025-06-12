// console.log(2>1);

// console.log("2">1);
// console.log("02">1);
// here js auto-matically converts string into int value

// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null>=0);//true

// the reason is that an equality check and comparisions works differently comparisions convert null into a number treating it as 0  that is why 3rd is correct and 1st is wrong as 0>0 is false

// console.log(undefined==0);//false
// console.log(undefined<0);//false
// console.log(undefined<0);//false

//=== - strict check and it checks both type and data

console.log("2"===2)//false,not same datatype

// sometimes null converted into NaN and sometimes in zeroes hence this creates problem