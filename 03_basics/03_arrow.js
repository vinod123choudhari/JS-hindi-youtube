// this use to print current objects

const user = {
    username : "vinod",
    userage : 34,
    mail : "vinodchoudhari371@gmail.com",
     userfunc : function(){
        console.log(`${this.username}, is my website`)
        console.log(this)
    }
}

// user.userfunc()
// user.username = "dharm"
// user.userfunc()

// console.log(this)

// function game(){
//     let username = "vinod234"
//     console.log(this)
//     // console.log(this.username)
//     // not print beacause it is only work in object
// }

// game()

// const func1 = function(){
//            let username = "vinod234"
//     console.log(this)
// //     // console.log(this.username)
// //     // not print beacause it is only work in object
// //

// }

// func1()

// arrow function use
const func2 = ()=>{
           let username = "vinod234"
    console.log(this)
    // console.log(this.username)
//     // print but only empty block
//

}

// func2()

// arrow declear diferent methods 

const arrowfunc = (num1, num2) =>{
    return num1 + num2

}

console.log(arrowfunc(2,3))
const arrowfunc1 = (num1, num2) =>  num1 + num2

// console.log(arrowfunc(3,4))

const arrowfunc3 = (num1, num2) =>  (num1 + num2)

// console.log(arrowfunc3(3,4))

//  arrow with declear with objects
const arrowfunc4 = (num1, num2) =>  ({name : "vinod"})

console.log(arrowfunc4())









