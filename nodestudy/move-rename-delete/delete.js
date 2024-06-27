const fs = require('fs');

// unlike()
fs.unlink('./nodestudy/write-read/date1.txt', err =>{

    if (err){
        console.log('false');
        return;
    }
    console.log('ture');
})

// rm()
fs.rm('./nodestudy/write-read/date1.txt', err =>{

    if (err){
        console.log('false');
        return;
    }
    console.log('ture');
})