const accountId=144553
let accouuntEmail="dhruv@gmail.com"
var accountPassword="12345"
accountCity="Ghaziabad"
let accountState;
// if var,let,const mile to usko memory ke andr assign krdo 

// const can't be change agar hm chng krke dobara bhi likhde tb bhi vo same hi rhegi kyuki node js sb kuch analyse kar raha hai

// accountId=2 //this is not allowed

console.log(accountId);

accouuntEmail="dr@gmail.com"
accountPassword="2121"
accountCity="Bengaluru"


// this can print all the values in a tabular form
console.table([accountId,accouuntEmail,accountPassword,accountCity,accountState])

// var has scope problem hence we use let instead of that bcz it has no scope prob 

/*
Prefer not to use war
bcz of issue in block scope and functional scope
*/

// js is such a safe lang ki hm bina koi type likhe bhi memory ko reserve kr skte hai which we have done in accountCity but this is not a good practice 

// agr kisi var ko initialise kro to vo print hone pe undefined show krta hai