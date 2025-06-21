//for in

const myObject={
    js:'Javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'Swift by apple'
}



for (const key in myObject) {
//    console.log(key);
// console.log(myObject[key])
// console.log(`${key} shortcut is for ${myObject[key]}`)
}


//can we use forin loop for arrays
const programming=["js","cpp","py","rb"]
// for (const key in programming) {
//    console.log(key)
// } 

//for in loop me array ki keys aa jati hai

// for (const key in programming) {
//    console.log(programming[key])
// }



//for in on maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")


//no output as map is not iterable like this
for(const key in map){
    console.log(key)
}