// global scop

// let a= 5
// const b = 5
// var not use var work globaly and block scop 
var c = 5

// console.log(a)
// console.log(b)
// console.log(c)

// block scop
{
     let a = 4
     const b = 5
     var  c = 6
}

// console.log(a)
// console.log(b)
// console.log(c)

// a not print but c print beacause c is a var datatype 


// function one(){
//     const name = "vinod"

//     function two(){
//         console.log(`my name is ${name}`)
//     }
//     two()
// }

// one()


if(true){
    const name = "vinod"
    const age = 24
    if(name ==="vinod"){
        const website = "fitnessfreek"
        console.log(website)
        console.log(`My name is ${name} and ${age}`)
    }
    // console.log(website)
}


// normal declear functions
console.log(one(5))
function one(num){
  return num +1
}

// hosting not declear function top beacause it hold function in variable 
// console.log(twofunc(5))
const twofunc = function(num){
    return num + 2
}
console.log(twofunc(5))
