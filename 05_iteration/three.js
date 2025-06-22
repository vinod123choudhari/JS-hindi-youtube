// other loops

const arr = [1,2,3,4,54]

for (const num of arr) {

    // console.log(num)
}

const obj = {
    name : "vinod",
    age : 34,
    mail :"vinodchoudhari371@gmail.com"
}

for (const myobjt of Object.keys(obj)) {
    // console.log(myobjt)
    
}

for (const key in obj) {

    // console.log(`${key} is value :-${obj[key]}`)
    
}

// map is a object but not doublect values in object 

const map = new Map()

map.set('k',"keys")
map.set('v',"vinod")
map.set('d',"dharm")

// console.log(map)

for (const [keys,values] of map) {
    console.log(keys, ":-",values)
    
}

// array print with for loop 


const myarr1 = ["vinod","dharm","deepesh"]

for (const key of myarr1) {
    console.log(`${key} is values :- ${key}`)
    
}