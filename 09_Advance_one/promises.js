// Promise is an object representing the eventual completion or failure of an asynchronous operation
//promise create bhi hote but mostly hm unko consume krte h


/*
const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
*/

//here when we run the file we get aync task is complete but promise consumed ni aya kabhi bhi kya hamne shise promis eko create kia bhi ya nhi hmne resolve and .then ko kabhi connect hi nahi kia hai jab resolve() execute hoga tb ye .then vala part run krega and ye hmesha bad m run krega



// it is not necessary to store in variable 


//declaration without giving the variable name and merging .then function with it 
/*
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)

}).then(function(){
    console.log("Aync 2 resolved");
})
*/


/*
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Sending data to (.then)")
        resolve({username:"Dhruv_487",email:"rana@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    console.log("Data aagya hai");
})
*/


/*
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"dhruv",passWord:"487"})
        }
        else{
            reject('ERROR:Something went wrong!')
        }
    },1000)
})


promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);//something went wrong
}).finally(()=>{
    console.log("The promise is either resolved or rejected.")
})
*/

//it is like default ye hotah hi hota hai-means like hame koi kam krana hi tha ki error aye ya smooth chle to ye krlo


//promise is a thing which is going to occur in future and it is not necessary ki ye .then .catch .finally se hi chle we can also use async await 



/*
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Javascript",passWord:"123"})
        }
        else{
            reject('Error : JS went wrong');
        }
    },1000)
})


//async await ka ek dikkkat hai vo directly errors ko handle ni kr skte here hmne usko try and catch me ni rkha hai usko hamne directly handle kia hai so error is coming 
async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive();
*/



/*
async function getAllUsers(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        //response.json bhi convert hone me tym lgta hai hence isko bhi convert krana pdega
        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ",error);    
    }
}

getAllUsers();
*/


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));