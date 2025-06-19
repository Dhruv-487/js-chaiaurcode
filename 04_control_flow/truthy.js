const userEmail="d@dhruv.ai"

if(userEmail){
    console.log("Got user Email")
}
else{
    console.log("Dont have user email ")
}

//falsy values
// false,0 ,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
// true,"0",'false'," ",[],{}, function(){}

// if(userEmail.length===0){
//     console.log("Array is empty")
// }
// else{
//     console.log("not empty");
// }



const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator(??) : null undefined


    
// let val1;
// val1=5??10
// val1=null ?? 
// val1=undefined??15
// val1=null??10??20//is case me jo first value milti hai to vhi assign ho jati hai

// val1=null?? undefined??10     // gives 10 

// console.log(val1)

// fayda hi kya "??" lgane ka jab first val hi ari hai(5) 
// kai bar ye hota hai ki jab database se call krege firebase ka use krege etc to hame directly response ni milta 2 values milti hai to  chances hai ki ho skta hai ki null response aa jaye,undef aajaye to usse poora code str pareshan ho skta hai for its it is made ki values ko treat krna hai ki null hai to us hisab se adjust krlu undef ya koi value ho to assign krdo
    
// ye operator kam ase krta hai ki null value ati hai to uska safety check krta hai bcz ky pata null ke basis pe prog run na kare 






//Terniary Operator
// condition?true:false


const iceTeaPrice=100

iceTeaPrice<=90 ? console.log("less than 90") : console.log("greater than 90")