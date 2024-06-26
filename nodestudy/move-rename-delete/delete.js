const fs = require('fs');

fs.unlink('./nodestudy/write-read/date1.txt', err =>{

    if (err){
        console.log('false');
        return;
    }
    console.log('ture');
})
nodestudy/write-read/date1.txt