
/*for loop
for (let i = 0; i < 5; i++) {
    console.log(i); 
}
*/
/*while loop
let i = 0;
while (i < 5) {
    console.log(i); 
    i++;
}*/
/*do while
let i = 0;
do {
    console.log(i); 
    i++;
} while (i < 5);
*/
let data = ['one' , 'two' , 'three' , 'four' , 'five' ]


    for(let i of data){
        console.log(i)
    }


    for(let i = 0; i < 10; i++){
        if(i == 3) {
          console.log("Validation checked")
          continue;
        }
        console.log (i)
        }
        
