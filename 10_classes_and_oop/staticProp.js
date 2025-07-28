class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    //static krdia to koi access ni kr payega directly
    static createID(){
        return `123`
    }
}

const hitesh=new User("hitesh")
// console.log(hitesh.createID()) //no o/p

class Teacher extends User{
    constructor(username,email){
        super(username)//this will do everything on its own
        this.email=email
    }
}

const iphone=new Teacher("iphone","i@phone.com")
iphone.logMe()
// console.log(iphone.createID())  //static vala access ni kr skte hm
console.log(iphone)