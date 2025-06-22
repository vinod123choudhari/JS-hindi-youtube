// foreach loop use functions to access functions values 

const arr = ["vinod","pandeybhai","dharm"]

// arr.forEach(function (item) {
// //   console.log(item)
// })


// arr.forEach( (item) =>{
// console.log(item)
// })

// const myfunc = (item) =>{
//     console .log(item)
// }

// arr.forEach(myfunc)

const arr3 = [{
    languagename : "C++",
    languagecode :"C"

},
{
    languagename : "Python",
    languagecode :"py"
},
{
  languagename : "JavaScript",
    languagecode :"Ja"
}
]

arr3.forEach( (item,index, arr3) => {
    console.log(item,index,arr3)
})

