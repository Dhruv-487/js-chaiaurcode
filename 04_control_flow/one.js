//if

// if(condition){
    //scope
// }

// condition in if should be true 
if(false){
    //does not execute
}


const isUserLoggedIn=true

// if(isUserLoggedIn){

// }

// comparisions
//<,>,<=,>=,==,!=,===,!==

// if(2==2){
//     console.log("True")
// }

/*
const temp=41
if(temp<50){
    console.log("Less than 50")
}
else{
    console.log("Temp is greater than 50")
}
*/
const score=200
if(score>100){
    const power="fly"//local variable
    // console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

//var ka scope completely global hota hai,to agr hm const ki jgh var likhte to hm  usko bhar bhi access krlete pr let or const me ni kr payege which is good ye error de jada acha hai as compared to ki ye bhar access ho jaye local var


/*
const balance=1000

if (balance < 500) console.log("less than 500");
else if (balance < 900) console.log("less than 900")
else {
    console.log("less than 1200")
}

*/

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const  loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}
    
    




