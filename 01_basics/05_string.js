const name= "vinod"
const sarname = "Chaudhary"

//console.log( name + sarname)
// wrong method

// best methods

console.log(`My name is ${name} ${sarname}`)

// defined different string 

const address = new String('haripur kalan dehradun')
// console.log(address.__proto__)
// console.log(address[0])
// let text = "vinod";
// let char = text.charCodeAt(0);
// console.log(char)

const anotherstring = address.substring(0, 4)

// console.log(anotherstring)

const anotherstring1 = name.slice(-8,4)
// console.log(anotherstring1)

let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

// console.log(text2)

let text = "3";
let padded = text.padEnd(2,"1");

// console.log(padded)

let string1 = "I love cats. Cats are very easy to love. Cats are very popular";
text1 = string1.replace("I love cats. Cats are very easy to love. Cats are very popular","my name is vinod")


console.log(text1)
