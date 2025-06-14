//Dates

let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())

// console.log(typeof myDate)



// in js months starts from 0
// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate.toDateString())

let mineDate=new Date(2023,0,23,5,3)
// console.log(mineDate.toLocaleString())


// let myCreatedDate=new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate=new Date("06-14-2025")//MM-DD-YY
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp=Date.now()

// console.log(myTimeStamp)//this will give a long digit ye 1970 se ab tk ka miliisecond value dera hai

// console.log(myCreatedDate.getTime())//this gives time from that 1970 stuff


// console.log(Date.now()/1000)//but this gives int decimals

// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());



// `${newDate.getDay()} and the time is`



newDate.toLocaleString('default',{
    weekday:"long",
})