// primitive 

// 7 datatype : string, null, boolean, undifined, number , symbol, bigInd



const id = Symbol('123')

const differentid = Symbol('123')

console.log(id === differentid)
// reference ( non-primitive)

// array, Objects, functions

let myarray = ["vinod","dharm","Eren Chaudhary"]

let Myobject = {
    Name : "vinod",
    Age : 23
}

let Myfunctions = function (){
    console.log(" My first function")
}

// all non-primitive datatype is object