const express = require('express');

const app = express();


// route request
/* app.get('/home', (req, res) => {
    res.end('hello express');
});

app.get('/', (req, res) => {
    res.end('home');
});

app.post('/login', (req, res) => {
    res.end('login login');ç
});

app.all('/test', (req, res) => {
    res.end('test test');ç
});

app.all('*', (req, res) => {
    res.end('404 not found');ç
}); */

// get route params
app.get('/:id.html', (req, res) => {
    console.log(req.params.id); 
    res.end('detail');
});

app.listen(3000, () =>{
    console.log('start')
})