//array declear
const myarr = [3,4,5,6,"vinod"]

const myarr2 = new Array("vinod")

// console.log(myarr,myarr2)

// array methods 
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let size = fruits.unshift("Lemon");
// console.log(`my array length ${size}`)
let size1 = fruits.join();

// console.log( typeof size1)

// console.log(fruits)

// slice and splice

const sefruits = fruits.slice(0,4)

console.log(sefruits)

// orignal array
console.log("A  ",fruits)

const spfruits = fruits.splice(1,3)
console.log(spfruits)

//orignal array

console.log("B  ", fruits)







