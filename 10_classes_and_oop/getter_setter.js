class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    //agar ham getter define krege to setter define krna hi pdega
    //get ko hmesha return krege but setters ko return ni krte hai
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}dhruv`
    }
    set password(value){
        this._password=value
    }
}
const hitesh=new User("d@gmail.com","abcc")
console.log(hitesh.password)
console.log(hitesh.email)