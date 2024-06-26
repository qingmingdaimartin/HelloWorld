const fs = require('fs');

/* //rename
fs.rename('./write.txt', 'newWrite.txt', err =>{

    if (err){
        console.log('false');
        return;
    }
    console.log('ture');
}) */


//move
fs.rename('./newWrite.txt', './nodestudy/move-rename-delete/newWrite.txt', err =>{

    if (err){
        console.log('false');
        return;
    }
    console.log('ture');
})