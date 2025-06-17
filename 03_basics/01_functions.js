
function sayMyName(){

    console.log("D");
    console.log("H");
    console.log("R");
    console.log("U");
    console.log("V");
    
}

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
    
// sayMyName()

// addTwoNumbers(10,1)
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)


// func ki definition ke andr jo inputs lete hai vo parameters hote hai
// and jab func ko call krate h usme jo pass krte hai vo hote hai arguments

function addTwoNumbers(num1,num2){
    //isse print ni hoga kyuki hm ni bolre console log kro this stores the value in the var result
    // let result=num1+num2
    // return result


    // or
    return num1+num2

}
   
const result=addTwoNumbers(4,5)
// console.log("Result: ",result)
// console print krne ka matlab ye nahi ki func vo value return bhi kar raaha hai



function loginUserMessage(username="sam"){

    // agar hmne default value idhr sam set krdi to hm is block ke andr ja hi ni payege sam print hoga otherwise jo bhi input dege vo hoga
    if(!username) {
        console.log("please enter a username")
        return
    }

    // or

    // if(username === undefined) {
    //     console.log("please enter a username")
    //     return
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())//agr kuch passs ni krege then undefined ayega





//***********************************************************************

// ... iski vjh se hm kitti bhi arguments pass kr skte hai 
function calculateCartPrice(val1,val2,...num1) {
 return num1   
}


// ab val1-200
// val2-400 and rest of in num1
// console.log(calculateCartPrice(200,400,500,800))


const user={
    username:"dhruv",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `)
}
// handleObject(user)

// OR

// handleObject({
//     username:"Sam",
//     price:399
// })


const newArr=[200,3000,30000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArr));
// OR
// console.log(returnSecondValue([200,300]))