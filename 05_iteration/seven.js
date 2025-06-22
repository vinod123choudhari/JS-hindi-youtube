const arr1 = [3,4,5,1,2,7,9]

const mymap = arr1.map((num) => num + 10)

console.log(mymap)

// chaning method

const mymap1 = arr1
.map((num) => num *10)
.map((num) => num+1).filter((num) => num > 40)

console.log(mymap1)
