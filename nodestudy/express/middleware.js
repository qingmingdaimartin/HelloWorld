const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

function recordMiddleware(req, res, next){
    let {url, ip} = req;
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);
    next();
}

app.use(recordMiddleware);
// route request
app.get('/home', (req, res) => {
    /* let {url, ip} = req;
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`); */
    res.send('front');
});

app.get('/admin', (req, res) => {
    res.send('backend');
});

app.all('*', (req, res) => {
    res.send('<h1>404 not found </h1>');ç
});



app.listen(3000, () =>{
    console.log('start')
})