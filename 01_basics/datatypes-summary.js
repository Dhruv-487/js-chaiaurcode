// the diff is on the basis of how these data are stored in memory and how can we access it.

//  #Primitive-these are call by value , copy krke dia jata hai


// 7 types/categories:String , Number , Boolean , null , undefined , Symbol , BigInt.


// JavaScript is dynamically typed, not statically typed.
// Dynamically typed means you don't need to declare variable types. The type is determined at runtime.
const outsideTemp=null

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id===anotherId);//false
// jabki values hmne same di hai but return value is not same as names are diff this is what symbol do and that's how it is used for uniqueness


const bigNumber=141561460158916580615n
// last me n lgane se Big Int ban gaya hai


// **********************************************************//


//Reference(Non Primitive)
// Array,Objects,Functions

const heroes=["Shaktiman","spiderman","batman"];

let myObj={
    name:"dhruv",
    age:19,
}
// {} ke andr ka values is object

const myFunction=function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);//"object" return krega  null ka type

// console.log(typeof myFunction);

// jitte bhi non primitive type hai inka return type object is aata hai,
// idhr function ka function hi ara hai but in actual it is function-object



//********************************************************************//

// Stack(Primitive) , Heap(Non-primitive)

let myYoutubeName="hiteshchdotcom"

let anotherName=myYoutubeName
anotherName="chaiaurcode"


// console.log(myYoutubeName);
// console.log(anotherName);


// ye sab variables stack me save hote hai and jab call by value hota hai to uski ek copy pass ho jati hai

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
// the data inside the bracket will go into the heap and it is call by reference
// userOne bhi stack m hoga and usko direct reference milega direct heap me stored data se

let userTwo=userOne//isiko bhi same pehle vale ka reference mil jayega

userTwo.email="hitesh@google.com"


console.log(userOne.email);
console.log(userTwo.email);//value changed in heap and gives same output for both


const naam="rana"
console.log(typeof naam)