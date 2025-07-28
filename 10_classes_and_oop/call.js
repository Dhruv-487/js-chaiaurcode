function setUsername(username){
    this.username=username
}

function createUser(username,email,password){
    setUsername.call(this,username)

    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@fb.com","123")
 console.log(chai);
 

//yha pe call to hora h  uska execution context bhi hai pr fir bhi username kyu print ni ho para hai problem ky ari hai?
// problem ye arri hai ye call hua run hua to isko htadia call stack se ye execute hote hi gayab hogya to aise gayab thodi krdena hai uska execution context hold krke rkhna hai
// reference hold krne ke liye jo method ata hai vo hota hai .call 
// ab hamne .call bhi likha hai tb bhi koi kam ni hoga call hoga vo lekin object me koi chng ni milega lekin uske vars hatte hi gayab ho jare hai
// hmko execution context vah dena pdega iske liye hme ek refernce dena pdega ki jo hm set krre hai vo khud ke this me mat kro ye hmara this gayab ho jygea to usko hm apna 'this' dedege
// is this ke pas krne se current context milra hai  jaise hi context mila bhale hi mai gayab hojau pr mere saman apke hogye and we get our output