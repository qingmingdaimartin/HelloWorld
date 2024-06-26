const fs = require('fs');

//asynchronization
fs.writeFile('./write.txt', 'three people test', err =>{

    if (err){
        console.log('false');
        return;
    }
    console.log('ture');
})


//synchronization write
fs.writeFileSync('./date.txt', 'test');