const marvel_heroes=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvel_heroes.push(dc)//not a good method bcz this pushes the whole array into the another array

// console.log(marvel_heroes)

// const allHeroes=marvel_heroes.concat(dc);
// console.log(allHeroes);

// concat always create a new array which is a comb of 2 or more arrays



// spread operator -  " ... "-ye dot dot krne se -ab vo array ni raha ab uska ek ek element individual ho gye ,concat me limitation hai ki ek bari me 2 hi jud skte hai isme aisa ni h 
const allNew=[...marvel_heroes,...dc]
// console.log(allNew);


const anotherArray=[1,2,3,[4,5,6],[6,7,[4,5]]]
// sbko ek array me dene ke liye
// bracket me hme depth pass krni hoti hai ek array ke andr further kitti depth tk flat kre
const realArray=anotherArray.flat(Infinity)
// console.log(realArray)


console.log(Array.isArray("hitesh"))//is this array?
console.log(Array.from("Hitesh"))//from isko array me convert krdega


console.log(Array.from({name:"Hitesh"}))//interesting
// dont directly converts bcz hme bolna pdega ki keys ka array banau,value ka array bnau agr ni bna paya to hme empty array dega

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))