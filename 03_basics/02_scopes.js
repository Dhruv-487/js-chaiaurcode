
// global scope
var c=300

let a=100
if(true){
    //local/block scope and ye bhar ni jana chaiye
    let a=10
    const b=20
    var c=30 
    // console.log("INNER : ",a)
}

// console.log(a);

// console.log(a)//out of scope
// console.log(b)//out of scope

// console.log(c)//this is the problem with var,it prints 30,ye loal scope ke andr update hone pe glocal values ko change kr rha hai while in const and let it is not happening





function one(){
    const username="dhruv"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website);//cant be accessed

    // two()
    
}

// one()


if(true){
    const username="dhruv"
    if(username==="dhruv")
    {
        const website=" Youtube"
        // console.log(username+website)   
    }
    // console.log(website)
}

// console.log(username)




// ****************************INTERESTING***********************************
// normal functions hai 
addOne(5)//isko function se upr rkhege koi error ni ayega
function addOne(num){
    return num+1
 }


// expression ki trh hai
addTwo(5) //but this shows error when placed before the func
const addTwo=function(num){
    return num+2
}


//the problem is based on the basis of declaration , concept is hoisting... 