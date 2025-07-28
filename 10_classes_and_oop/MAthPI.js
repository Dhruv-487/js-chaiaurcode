const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

console.log(Math.PI);
Math.PI=5
console.log(Math.PI)

// PI ek universal value hai and isko rewrite enumerate krna is not poss isme  bhut sare checks lge hue hai hence we cant chng it

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    //ye kam ni kreag code fatt jayega 
     orderChai:function(){
        console.log("Chai nahi bani");
     }
}

// console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
//iska pooora description ky initially hai props sb mil jayega


// and hmara code hai to hm isko chng bhi kr skte hai
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));



// //this is not iterable bcz this is an object - kabhi hota hai kbhi nahi
// for(let [key,value] of chai){
//     console.log(`${key} : ${value}`);
// }



//to make it iterable
for(let [key,value] of Object.entries(chai)){
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`);
    }
}



//when enumerable is false tehn name print ni hora hai