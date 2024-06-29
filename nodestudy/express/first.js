const express = require('express');

const app = express();

app.get('/home', (rep, res) => {
    res.end('hello express');
});

app.listen(3000, () =>{
    console.log('start')
})