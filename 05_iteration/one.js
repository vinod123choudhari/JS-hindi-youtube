//loops

for (let i = 0; i <=10; i++) {

    const element = i;
    if(element == 5){
        // console.log("5 element find")
        break;
    }
    // console.log(element)
    
}

for (let i = 1; i <=10; i++) {
    const element = i ;
// console.log(`outer loop value : ${element}`)
for (let j = 1; j <=10; j++) {
    const element = j;
    // console.log(i + "*" + j +"=" + i*j)
    
}
    
}

const myarray = ["vinod","dharm","Eren"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element)
    
}
// break  use to stop loop this condition found
for (let index = 0; index <=20; index++) {
    const element = index;
    if(element ==5){
        console.log(` this value is find ${index}`)
        break
    }
    // console.log(element)
}

//continue use to this condition print and loop continue 
for (let index = 0; index <=20; index++) {
    const element = index;
    if(element ==5){
        console.log(` find value ${index} and loop continue `)
        continue
    }
    console.log(element)
    
}

