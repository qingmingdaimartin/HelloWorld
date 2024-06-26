const fs = require('fs');

//asynchronization
/* fs.readFile('./write.txt', (err,data) =>{

    if (err){
        console.log('false');
        return;
    }
    console.log(data.toString());
}) */

//synchronization read

let data = fs.readFileSync('./date1.txt');
console.log(data.toString());