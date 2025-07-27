const user={
    username:"Dhruv",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("got user detais from database");
        // console.log(`Username: ${username}`);//gives error that username is not defined
        // console.log(`Username: ${this.username}`)
        console.log(this);
        
    }

}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);

//agr ham console log yha global context ke this me print kraye agr to we get {} bca abhi vha kch ni hai and vo context chng hota rhta hai





// const promiseOne=new Promise()
// const date=new Date 

//here ye jo new hai ye ek constructor function hai ye hmne allow krta hai ki ek object literal se multiple inistance bna skte hai
// new is used to make new executional context 


function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn


    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this//ye likha ya nhi likhe return hoga hi
}

const userOne=new User("dhruv",12,true)

// console.log(userOne);

const userTwo=new User("ChaiAurCode",11,false);
// console.log(userOne);
//data overwrite hogya yha pe when we dont use new keyword


console.log(userOne.constructor)
// console.log(userTwo)

//1->when we use new keyword kya hota hai ek empty object create hota hai sbse pehle to jisko instance bola jata hai
// 2-> ek constructor func call hota hai new keyword ke karan or ye ky krta hai sare arguments vgera pack krke uske andr dedeta hai
//3->this keyword me ye args inject ho jate h
// 4->yye hme mil jaygea


//constructor property ek reference hotii hai khud hi ke bare me  f