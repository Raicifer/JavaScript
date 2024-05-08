const User={
    name:"Shouvik",
    age:15,
    location:"Kolkata",
    email:"shouvik@gmail.com"

}
User.email="shouvikguha@gmail.com"
//console.log(User.email)

User.greeting=function(){
    console.log("HELLO")
}
User.greeting2=function(){
    console.log(`hello ${this.name}`)
}
//console.log(User.greeting())
//console.log(User.greeting2())

const ob1={1:"a",2:"b"}
const ob2={3:"a",4:"b"}
const ob3={5:"a",6:"b"}

const ob={...ob1,...ob2,...ob3}
console.log(ob)