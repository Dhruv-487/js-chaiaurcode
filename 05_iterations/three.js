//for of

["", "", ""]//grp of strings
[{},{},{}]//grp of objects

const arr=[1,2,3,4,5] 
 
// for (const num of arr) {
//     console.log(num);
// }
    
const greetings="Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//maps-stores unique value 
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map)

// for(const [key,value] of map){
//     console.log(key,':-',value);
// }

const myObject={
    //not iterable in this format
    'game1':'NFS',
    'game2': 'Spiderman'
    // also not in  this format
/*
    game1:'NFS',
    game2: 'Spiderman'

    */
}

for(const [key,value] of myObject){
    console.log(key,':-',value);
}