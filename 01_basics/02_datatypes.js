console.log(3+3)
let name="Shouvik" //string 
let age=21 //number
let isloggedin=true //boolean
let bigno = 123456785557688686

// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof isloggedin)
// console.log(typeof bigno)

// STACK(PRIMITIVE) AND HEAP MEMORY(NON PRIMITIVE) IN JS

let myinstaid = "show_vikk"
let gameid=myinstaid
myinstaid="raicifer"
console.log(myinstaid)
console.log(gameid)

let UserOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let UserTwo=UserOne
UserTwo.email="shouvik@gmail.com"
 console.log(UserOne.email)
 console.log(UserTwo.email)
