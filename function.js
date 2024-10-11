/*function greet() {

console.log("Alice")
}
greet()*/
/*parameter
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));*/
//recursion
/*function factorial(n) {
    if (n === 0) { // Base case
        return 1;
    } else {
        return n * factorial(n - 1); // Recursive case
    }
}

console.log(factorial(5)); */

// callback function
/*function fetchData(callback){
    setTimeout(()=>{
        console.log("Network Data");
        callback();
    },1000);
}
    function processData(){
        console.log("Processing Network data");

    }
    fetchData(processData);
    console.log("Hello I am working")*/

    //promise

    /* 
    let promise = new Promise((resolve, reject) => {
        let success = false; // This will determine if the promise resolves or rejects
    
        if (success) {
            resolve("Operation successful");
        } else {
            reject("Operation failed");
        }
    });
    
    promise
        .then((message) => {
            console.log(message); // This will not run because `success` is false
        })
        .catch((err) => {
            console.log(err); // Outputs: Operation failed
        });
    */
   //Async function
   /*async function fetchData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });

    let result = await promise; // Waits for the promise to resolve
    console.log(result); // Outputs: Data fetched
}

fetchData();*/
//typeof

/*var data = true;

  var type = typeof(data);


 console.log(type);*/

 // null mean memory block are create but data are not assign (mean memory  block are empty)

/*var data = {name : "Shanza" , age : 20 };

var type = typeof(data);


console.log(type);
console.log(data)
*/
function sum(a,b)  {
    return a+b;
}



var num1 = 1;
var num2 = 10;

var sum1 = sum(num1 , num2);
var sum2= sum (30 , 40);

console.log(sum1)
console.log (sum2)


