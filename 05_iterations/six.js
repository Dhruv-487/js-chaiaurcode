//more on for each loops

// const coding=["js","html","python","cpp"]

// const values=coding.forEach((item) => {
//     console.log(item)
//     return item
// })

// console.log(values)//undefined



const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num)=> num > 4 )
// console.log(newNums);

//whenever we use filter to uske andr ek call-back function milega jiske andr each value ko access kia jayega and uske bd ek cond di jati hai jo jo us cond ko satisfy krege and true hogi to vo values return ki jayegi

//or

/*
const newNums=myNums.filter((num)=>{
    // num>4//ye object return krega jab brackets dal diye
    
    //hence to return the vals we have to use return keyWord
    return num>4//after opening scope use return keyword for sure

})

*/

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4) newNums.push(num)
// })

// console.log(newNums); 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// const userBooks=books.filter((bk)=>bk.genre==='History')
// const userBooks=books.filter((bk)=>bk.publish>=2000)
// const userBooks=books.filter((bk)=>{ return bk.publish>=2000})//if {}-then use return

const userBooks=books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre==='History'//and for conds
})

console.log(userBooks);
