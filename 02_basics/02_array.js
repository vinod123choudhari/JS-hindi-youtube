// array marge methods

const arr1 = ["vinod", "dharm", "deepesh"]
const arr2 = ["chaudhary","chaudhary","dhiman"]

// wrong method

// arr1.push(arr2)
// console.log(arr1)

// correct method

let arr3 = arr1.concat(arr2)
// console.log(arr3)

const allarr = [...arr1,...arr2]
console.log(allarr)

// multiple array split single array

const mulitarr = [2,3,4,5,6,7,[4,5,6,6],[56,7,7]]
const singlearr = mulitarr.flat(Infinity)
// console.log(singlearr)

// convert array

console.log(Array.isArray("Vinod"))
console.log(Array.from("vinod"))
console.log(Array.from({name: "vinod"}))// intersted case

let core1 =100
let core2 =200
let core3 =300

console.log(Array.of(core1,core2,core3))




