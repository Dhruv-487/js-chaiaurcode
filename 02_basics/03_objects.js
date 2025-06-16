// singleton
// jab ham literals ki  tarah declare krte hai to singleton ni banta hai

//constructor se hmesha singleton bnta hai


//object literals

// {}-object
// ye keys automatically string ki tarah store ho rhi hai
const mySym=Symbol("key1")

const JsUser={
    name:"Dhruv",
    "fullname":"dhruv rana",
    [mySym]:"mykey1",//way to use symbol
    age:18,
    location:"Jaipur",
    email:"dhruv@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);//STRING ki trah pass krege


// console.log(JsUser.fullname);
// console.log(JsUser["fullname"]);

// console.log(JsUser[mySym]);..symbol



JsUser.email="dhruv@chatgpt.com"//how to chng any key
// console.log(JsUser.email);

// Object.freeze(JsUser)//now we cant chng object values

JsUser.email="dhruv@microsoft.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}

 
 
// console.log(JsUser.greeting)//this gives function return back
// console.log(JsUser.greeting())//gives hello js user



JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`)//this is used for referencing "this" is used
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())