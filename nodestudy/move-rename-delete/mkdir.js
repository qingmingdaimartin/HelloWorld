const fs = require('fs');

/* // creat mkdir
fs.mkdir('./text', err =>{

    if (err){
        console.log('false');
        return;
    }
    console.log('ture');
}) */

/* // creat recursive
fs.mkdir('./a/b/c', {recursive: true}, err =>{

    if (err){
        console.log('false');
        return;
    }
    console.log('ture');
}) */

// read directory
fs.readdir('./nodestudy',(err, data) =>{

    if (err){
        console.log('false');
        return;
    }
    console.log(data);
})

// delete directory
fs.rmdir('./a', err =>{

    if (err){
        console.log('false');
        return;
    }
    console.log('ture');

})