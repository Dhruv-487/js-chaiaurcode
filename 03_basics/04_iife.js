//Immediately Invoked Function Expressions(IIFE)-means jaise hi function likha usko turant hi execute krana hai

// function chai(){
//     console.log(`DB CONNECTED`)
// }

// chai()


//by using () ye ek block ban gya and run hogya
(function chai(){
    console.log(`DB CONNECTED`)
})(); 

// immediately invoked function  hai invoke hogya haipr isko pata ni h ki context ko rokna kaha hai to usko end krne ke liye ek ';' ki need hoti hai

//iife is not only which runs immediately after executing but 
// global scopes ke pollution se problem hoti hai kai bar to us global scope ke jo var hai usko pollution ko htane ke liye iife ka use kia hai


// this is named iife
// (function aurcode(){
//     console.log(`DB CONNECTED TWO`);
// })()


// can also be runned using arrow function
// yha argument dedia

// simple iife no name
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('dhruv')

// ye last vla bracket execute kar raha hai hence isko ek function ki tarah hi dekhna hai

//remember jab bhi 2 iife sath me likhege to semi colon yad rkho ni to error ayega