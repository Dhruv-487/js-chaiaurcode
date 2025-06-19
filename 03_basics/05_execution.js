// javascript execution context
// {}-Global exec context---ye bana hi banta hai and jha bhi ye anta ai usko refer krdia jata ai hai using -> "this" var ke andr isko rkha jata hai
// browser ke andr this ki value window object ati hai 

// ->GLobal execution context
// ->function ex. cnt.
// ->Eval ex. cnt. 


// {}->memory creation phase
// then ->execution phase
  

                // ******************************


let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}

let result1=addNum(val1,val2)
let result2=addNum(10,2)


// 1. global execution->this

// 2.memory phase
// val1->undefined
// val2->undefined
// addNum->definiton

// result1->undef
// result2->undef

// 3. Execution Phase
// val1=10
// val2=5
// jitti bar bhi functions execute hote hai utni bar ek naya box banta hai jisko hm bolte hai new execution context 
// addNum->made  a diff execution context,where sbse pehle yha pe banega ek new variable environment + execution thread
// ab new poora ek sandbox tyar ho gya hai to ab 2 kam vaps se execute hoge add NUM ke liye ab isme vapas se memory phase and execution phase krna pdega
/*
->memory phase
as this executional context is made for addNum function to hm num1 num2 func se dekhege na ki val1 val2 se ab yha pe ek total bhi hai to usko bhi lege hm
val1=undef
val2=undef
total=undef


->execution context
num1-10
num2-5
total-10+5=15
now total is also returning back hence hm global execution back m return krdege



ab ye is exec context ka kam hogya ab ye delete ho jayega 
*/

/*
now we made one more for next function call
where NVE+Thread

again memory phase and execution phase
again same khhaniii as it is
*/
// this is how kaise values ati hai and kis trh value use hoti hai



// CALL STACK
/*
call stack m sbse pehle global exec hota  hai
suppose koi func aya stack  me uska kam hogya to usko hata dege hm



//agar bhut sare functions stack me aa jate  hai hence to vo acc to LIFO hi bhar nikalte hai
*/




function one(){
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}

one()
two()
three()
