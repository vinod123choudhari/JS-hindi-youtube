//Object two types

// literals and constructors

// constructors = singleton

//Object literals

const mysymbol =  Symbol("key1")

const myobject = {
    name : "vinod",
    age : 23,
    address : "haripur kalan",
    // use this method to declear symbol in object 
    [mysymbol] : "key1",
    pincode : 2345
}


// object access methods 

// console.log(myobject.name)
// console.log(myobject[mysymbol])

// freeze method use to not change values 


myobject.name = "dharm"
// Object.freeze(myobject)
myobject.age = 5

// console.log(myobject)

myobject.greetiing = function() {
    console.log("my first function")
}
// not return function this return reference
console.log(myobject.greetiing)

// this return fuctions
console.log(myobject.greetiing())

// access object value in console method use this 

myobject.greetiingtwo = function() {
    console.log(`my first ${this.name}`)

}

console.log(myobject.greetiingtwo())