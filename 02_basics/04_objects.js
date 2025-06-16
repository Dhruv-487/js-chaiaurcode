// const tinderUser=new Object()//singleton object

const tinderUser={}//non-singleton object

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false



// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"dhruv",
            lastname:"rana"
        }
    }
}
//how to access obj in obj....
// console.log(regularUser.fullname.userfullname.firstname)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)//combine
// const obj3=Object.assign(obj1,obj2,obj4)//combine
// {}-this is EventTarget,and rest all are sources 
// console.log(obj3)
// console.log(obj1)

// console.log(obj1==obj3);//true

// {} agr hm empty ni dete to sari values obj1 me jati hai hence acha yhi hai ki hm empty obj dede for storing



const obj3={...obj1,...obj2}//spread method
// console.log(obj3)

// jab database se values ate h to vo array of objects hote hai h
const users=[
    {
        id:1,
        email:"h1@email.com"
    },
    {
         id:2,
        email:"h2@email.com"
    },
    {
         id:3,
        email:"h3@email.com"
    }

]

console.log(users[1].email)

console.log(tinderUser);

  console.log(Object.keys(tinderUser));//datatype array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//for checking any prop

