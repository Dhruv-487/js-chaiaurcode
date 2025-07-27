// jo bhi hm kam krre h vo hr chiz apne aap me object hi h to yha pe prototype ka jo reference ata hai vo null ka hi ata hai
// Array->Object->Null
// same with string

//everything in its own is a object and the props available with object is available with array an =d string

function multiplyBy5(num){
    return num*5;   
}

multiplyBy5.power=2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);//as func is also an object it behaves like this
console.log(multiplyBy5.prototype);//this is null iske bhar kha jaoge

//actually ye jo prototype hota h ye sirf methods ni uske sth kch properties bhi deta hai

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);   
}

const chai=new createUser("Chai",25);
const tea=new createUser("Tea",250);
chai.increment();
chai.printMe();
chai.increment();
chai.printMe();

// kya hota h- when the new keyword is used
//jab koi nya object bnta hai then the newly created object gets linked to the prototype property of the constructor function
// then cons ko call krdia jata hai jisse sb this vale uske sth inject ho jte h
// then the new object is returned


