const array = []

if(array){
    console.log("array is empty")
}else{
    console.log("array is not empty")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


const myobj ={}

if(Object.keys(myobj).length==0){
    console.log("object is empty")
}

// false = 0
// flase = ''
// 0 = ''

// true this condition
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=50 ? console.log("less than 50") : console.log("greater than 50")