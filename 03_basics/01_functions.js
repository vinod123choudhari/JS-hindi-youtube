//functions

function myfirstfunction(){
    console.log('v')
    console.log('i')
    console.log('n')
    console.log('o')
    console.log('d')
}


function secondfunc(num1, num2){

    // let result = num1 + num2
    // return result 
    // console.log("vinod")
    return num1 + num2
    // not print after return value 
    console.log("vinod")

}

let result = secondfunc(2,3)

// console.log("result", result)

// seconnd function mathods access

// function funcuser(username){

    
//     return `${username} is my user username`
// }

// console.log(funcuser())

// function funcuser(username){
//     if(username ===undefined){
//         console.log("enter the username")
//         return
//     }
    
//     return `${username} is my user username`
// }

// console.log(funcuser())


function funcuser(username="vinod"){
    if(!username){
        console.log("enter the username")
        return
    }
    
    return `${username} is my user username`
}

// console.log(funcuser())

// use rest mathod in function

// function myrest(...num1){

//     return num1

// }


// console.log(myrest(200,3,5,6,7))

function myrest(any1,any2,...num1){

    return num1

}

console.log(myrest(200,3,5,6,7))


//functions with objects

// const myobj = {
//     name : "vinod",
//     age : 34

// }

function myfunobj(anyobj){
   console.log(`my name is ${anyobj.name} and ${anyobj.age}`) 
}

myfunobj({
    name: "vinod",
    age :34
})


// array pass function


const myarr = [233,444,55,66]

function funcarr(myarr1){
    return myarr1[2]
}

console.log(funcarr(myarr))