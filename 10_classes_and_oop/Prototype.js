let myName="Dhruv    "
let myChannel="Chai      "


// console.log(myName.length)//9
// console.log(myName.trim().length)//5


console.log(myName.trueLength)

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"Sling",
    
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh=function(){
    console.log("Hitesh say hello");
}

// heroPower.hitesh();
// myHeros.hitesh()
// myHeros.heyHitesh()


const User={
    name:"chai",
    email:"chai@gogle.com"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TaSupport={
    makeAssignment:'JS Assi',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiAurCode      "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);   
}

anotherUsername.trueLength()

"dhruv  ".trueLength()
"icedTea".trueLength()