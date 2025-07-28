class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


// ab username ka ky kre hmne kahani padhi thi ki call vgera krna ppdega this bhi pass krna pdega pr ab class syntax hai to ab jrurt ni ab directly we can use super keyword ab isme username pass krdege ye ab refer krega ki konsi class extend kr rhe the user ko krre the to usi class ke andr jayega automatically constructr ke andr jayega and hme kch bolne ki jrurt ni vo automatically this ko le jayga and vha jake username set krdunga and teacher me vo value set ho jayegi and hm uska access le skte hai

class Teacher extends User{
    constructor(username,email,password){
        super(username)//this will access the username
        this.email=email
        this.password=password  
    }
    
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

//writing new is required 
const chai=new Teacher("chai","chai@gmail,com","123");

// chai.addCourse()


const masalaChai=new User("MasalaChaii")

// masalaChai.addCourse()//dont have access to this

masalaChai.logMe()//but have access to this func
console.log(chai===masalaChai)//0
console.log(chai===Teacher)//0
console.log(chai instanceof Teacher)//1 //means chai ko hmne create kia hai via already created TEacher

console.log(chai instanceof User)//1