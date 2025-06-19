//singleton object defined

const singleobj = new Object()
// not singleton but result same 

const obj = {}

// console.log([singleobj,obj])




const target = { a: 1, b: 2 };
const source = { c: 4, d: 5 };
// wrong method add tow objects
const wrongobj = {target , source}
console.log(wrongobj)
// assign use add two objects
const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true

// objcets methods

console.log(Object.keys(target))
console.log(Object.values(target))
console.log(Object.entries(target))
console.log(target.hasOwnProperty("a"))

// use to check values return true and false 

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// Expected output: true

console.log(object1.hasOwnProperty("toString"));
// Expected output: false

console.log(object1.hasOwnProperty("hasOwnProperty"));
// Expected output: false


// destructering 


const {a:e} = target

console.log(e)

//api

// {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       }

//     }
// //array formate

// [
//     {},
//     {},
//     {}
// ]

