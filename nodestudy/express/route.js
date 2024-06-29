const express = require('express');

const app = express();

app.get('/home', (rep, res) => {
    res.end('hello express');
});

app.get('/', (rep, res) => {
    res.end('home');
});

app.post('/login', (rep, res) => {
    res.end('login login');ç
});

app.all('/test', (rep, res) => {
    res.end('test test');ç
});

app.all('*', (rep, res) => {
    res.end('404 not found');ç
});

app.listen(3000, () =>{
    console.log('start')
})