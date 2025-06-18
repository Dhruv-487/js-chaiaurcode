const user={
    username:"Dhruv",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// this current context ko refer karta hai

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()


// now this  refers to empty in global environment bcz global ke andr koi context hi nahi hai/
// console.log(this);




// function chai(){
//     let username="dhruv"
//     console.log(this.username)
// }


// we cant use this inside a function , ye object ke andr hi kam kar raha hai
// chai()

// const chai=function(){
//     let username="hitesh"
//     console.log(this.username)
// }

// const chai=()=>{
//     let username="dhruv" 
//     console.log(this.username)//undef
//     console.log(this)//{}
// }

// chai()

// arrow function syntax-
// ()=>{}

// const addTwo=(num1,num2)=>{
//     return  num1+num2
// }

// another representaion for one line statement-implicit return 
// const addTwo=(num1,num2)=> (num1+num2)

// console.log(addTwo(3,4))


// {}-if use then use return keyword-explicit return
// when () used then no return required-implicit return


// benefit of using (),bbcz if we want to return obj then bina parenthesis ke return ni kr skte
const addTwo=(num1,num2)=>({username:"dhruv"})
console.log(addTwo(3,4))


const myArray=[2,5,3,1]
myArray.forEach()