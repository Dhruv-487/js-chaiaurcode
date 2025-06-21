const coding=["js","ruby","java","python","cpp"]
 

//if we use this then foreach requires a call back func and callback func ka nam ni hota hai and func array ke andr hai to ye func apne ap value leke ayega  
// coding.forEach( function (val){
//     console.log(val);
// })
    


// Using arrow function
// coding.forEach( (item)=>{
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)//yha sirf function ka refernce dena hai

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })



const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
     {
        languageName:"c++",
        languageFileName:"cpp"
    }, 
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName,item.languageName)
})