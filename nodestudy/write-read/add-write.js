const fs = require('fs');

fs.appendFile('./write.txt', '\r\nadd a new', err =>{
    if(err){
        console.log('false');
        return;
    }
    console.log('ture');
});