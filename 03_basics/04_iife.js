//immediately invoked function executions

//with name iife

(function chai(){

    console.log(`my name is vinod`)
})();


// without name iife 
((name) => {

    console.log(`my name is ${name}`)
})("vinod")

