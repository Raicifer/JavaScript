function FirstFun(){
    console.log("Hii")
}
//FirstFun()

function AddTwoNum(num1,num2){
    console.log(num1+num2)
}
//AddTwoNum(5,3)

function AddTwoNum(num1,num2){
    return num1+num2
}
const result=AddTwoNum(5,3)
//console.log(result)

function IsLogIn(username){
    if(username === undefined){
        console.log("PleaseEnterValue")
        return
    }
    return console.log(`${username} just logged in`)
}
//IsLogIn()

function calculateprice(...num1){
    return num1
}
//console.log(calculateprice(100,200,300,400))

const user={
    username:"Shouvik",
    price:21
}

function HandleObject(anyuser){
    console.log(`Username is ${anyuser.username} and age is ${anyuser.price}`)
}
HandleObject(user)

HandleObject({
    username:"raicifer",
    price:18
})


function GetValue(Arr){
    return Arr[1]
}
console.log(GetValue([100,200,300,400]))

