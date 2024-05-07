const myArray=[1,2,3,4,5]
//console.log(myArray[3])

const myArr=new Array(10,7,21,5,19,15)
//console.log(myArr.length)
//console.log(myArr[2])

//myArr.push(45)
//myArr.unshift(9)
//console.log(myArr.indexOf(21))
//console.log(myArr)

const marvel=["thor", "ironman", "spiderman"]
const dc=["superman", "batman","flash"]

console.log(marvel.concat(dc))

const allhero=[...marvel,...dc]
console.log(allhero)