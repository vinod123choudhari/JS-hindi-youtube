const arr = ["vinod","pandeybhai","dharm"]

// forEach loop does not return values

// const myfor=arr.forEach( (item) => {
//     // console.log(item)
//     return item
// })

// console.log(myfor)

//then use filter beacause forEach loop not return values 

// const arr1 = [1,2,3,4,5,6,6]

// const myfilter = arr1.filter( (num) => num > 5)
// console.log(myfilter)


// cerlibress use then use return keyword 
const arr1 = [1,2,3,4,5,6,6]

// const myfilter = arr1.filter( (num) => {
//     return num > 5})
// console.log(myfilter)

// const mynum = []

// arr1.forEach((num) => {
//     if(num > 4){
//         mynum.push(num)
//     }
// })

// console.log(mynum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let mybooks = books.filter((bk) =>  bk.title == 'Book One')

  mybooks = books.filter((bk) => {
    return bk.publish <2009
  })

  console.log(mybooks)




